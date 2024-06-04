import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { AuthsBtn, AuthsInput, SearchIdPw, Wrapper } from './Login.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogInClick = () => {
    if (!userId || !password) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
    }
  };

  const handleSignUpClick = () => {
    navigate('/auth/signUp');
  };

  const handleSearchIdClick = () => {
    navigate('/auth/searchId');
  };

  const handleSearchPWClick = () => {
    navigate('/auth/searchPW');
  };

  return (
    <Wrapper>
      <AuthsInput>
        <Input
          type="text"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="text"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthsInput>
      <AuthsBtn>
        <Button onClick={handleLogInClick} text="로그인"></Button>
        <Button onClick={handleSignUpClick} text="회원가입"></Button>
      </AuthsBtn>
      <SearchIdPw>
        <div onClick={handleSearchIdClick}>아이디 찾기</div>
        <div>|</div>
        <div onClick={handleSearchPWClick}>비밀번호 찾기</div>
      </SearchIdPw>
    </Wrapper>
  );
}
