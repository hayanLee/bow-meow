import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, SearchIdPw, Wrapper } from './Login.styled';

export default function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogInClick = () => {
    if (!userEmail || !password) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
    }
  };

  const handleSignUpClick = () => {
    navigate('/auth/signUp');
  };

  // const handleSearchIdClick = () => {
  //   navigate('/auth/searchId');
  // };

  const handleSearchPWClick = () => {
    navigate('/auth/searchPW');
  };

  return (
    <Wrapper>
      <div>
        <AuthsInput>
          <Input
            type="text"
            placeholder="이메일을 입력하세요"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </AuthsInput>
        <AuthsBtn>
          <Button type="submit" onClick={handleLogInClick} text="로그인"></Button>
          <Button type="submit" onClick={handleSignUpClick} text="회원가입"></Button>
        </AuthsBtn>
        <SearchIdPw>
          <div onClick={handleSearchPWClick}>비밀번호를 잊으셨나요?</div>
        </SearchIdPw>
      </div>
    </Wrapper>
  );
}
