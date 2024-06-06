import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, SearchIdPw, Wrapper } from './Login.styled';
import supabase from '../../supabase/supabaseClient';
import { checkSignIn, singInWithEmail } from '../../supabase/auth.login';

export default function Login() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogInClick = async () => {
    console.log(idRef.current.value);
    const { error } = await supabase.auth.signInWithPassword({
      email: idRef.current.value,
      password: passwordRef.current.value
    });
    if (error) {
      console.error('로그인 오류:', error.message);
      return;
    }

    if (!idRef.current.value || !passwordRef.current.value) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }
    alert('로그인 성공!');
    navigate('/');
    singInWithEmail(userEmail, password);
    checkSignIn();
  };

  console.log(localStorage.getItem('accessToken'));
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
          <Input type="text" placeholder="이메일을 입력하세요" inputRef={idRef} />
          <Input type="text" placeholder="비밀번호를 입력하세요" inputRef={passwordRef} />
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
