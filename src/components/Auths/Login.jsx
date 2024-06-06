import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../redux/slices/userReducer';
import { signInWithEmail } from '../../supabase/auth.login';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, SearchIdPw, Wrapper } from './Login.styled';
import supabase from '../../supabase/supabaseClient';
import { checkSignIn } from '../../supabase/auth.login';

export default function Login() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogInClick = async () => {
    if (!idRef.current.value || !passwordRef.current.value) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }

    const loginData = await signInWithEmail(idRef.current.value, passwordRef.current.value);
    console.log(loginData);
    if (!loginData || !loginData.id || !loginData.email) {
      alert('로그인 실패. 유저 정보를 불러오지 못했습니다.');
      return;
    }

    dispatch(updateUserProfile({ userId: loginData.userId, email: loginData.userEmail }));
    localStorage.setItem('uid',loginData.id)
    alert('로그인 성공!');
//     console.log(localStorage.getItem('accessToken'));
    navigate('/');

  };

  const handleSignUpClick = () => {
    navigate('/auth/signUp');
  };

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