import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmail } from '../../supabase/auth.login';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function Login() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogInClick = async () => {
    if (!idRef.current.value || !passwordRef.current.value) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }

    const loginData = await signInWithEmail(idRef.current.value, passwordRef.current.value);

    if (!loginData || !loginData.id || !loginData.email) {
      alert('로그인 실패. 유저 정보를 불러오지 못했습니다.');
      return;
    }

    alert('로그인 성공!');

    navigate('/');
  };

  const handleSignUpClick = () => {
    navigate('/auth/signUp');
  };

  return (
    <Wrapper>
      <div>
        <AuthsInput>
          <Input type="text" placeholder="이메일을 입력하세요" inputRef={idRef} />
          <Input type="password" placeholder="비밀번호를 입력하세요" inputRef={passwordRef} />
        </AuthsInput>
        <AuthsBtn>
          <Button type="submit" onClick={handleLogInClick} text="로그인"></Button>
          <Button type="submit" onClick={handleSignUpClick} text="회원가입"></Button>
        </AuthsBtn>
        {/* <SearchIdPw>
          <div onClick={handleSearchPWClick}>비밀번호를 잊으셨나요?</div>
        </SearchIdPw> */}
      </div>
    </Wrapper>
  );
}
