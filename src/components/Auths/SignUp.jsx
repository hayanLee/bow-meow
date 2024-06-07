import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase/supabaseClient';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);
  const checkpasswordRef = useRef(null);

  const [form, setForm] = useState({
    email: '',
    nickname: '',
    password: '',
    checkPw: ''
  });

  const handleSignUpClick = async () => {
    console.log(emailRef.current.value);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: emailRef.current.value,
        password: passwordRef.current.value
      });
      console.log(data);

      if (error) {
        console.log('오류', error);
      }
      console.log(data);
      const userData = await supabase.from('users').insert({
        uuid: data.user.id,
        email: data.user.email,
        nickname: nicknameRef.current.value,
        profile_img: 'https://suwbeekhficjymjlqdve.supabase.co/storage/v1/object/public/profile/defaultProfile.jpg',
        created_at: new Date()
      });
      console.log(userData);
    } catch (error) {
      console.log('오류', error);
    }

    if (
      !nicknameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !checkpasswordRef.current.value
    ) {
      alert('내용을 모두 입력하세요.');
    }

    if (passwordRef.current.value !== checkpasswordRef.current.value) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (passwordRef.current.value !== 6) {
      alert('비밀번호를 6자리로 입력해주세요.');
      return;
    }

    setForm({
      nickname: nicknameRef.current.value,
      signEmail: emailRef.current.value,
      signPw: passwordRef.current.value,
      checkPw: checkpasswordRef.current.value
    });
    alert('회원가입 성공!');
    navigate('/auth/login');
    // if (error) {
    //   console.error('error:', error.message);
    // }
  };
  console.log(form);

  return (
    <Wrapper>
      멍멍냥냥 회원가입
      <AuthsInput>
        <Input type="text" inputRef={emailRef} placeholder="이메일" />
        <Input type="text" inputRef={nicknameRef} placeholder="닉네임" />
        <Input type="password" inputRef={passwordRef} placeholder="비밀번호" />
        <Input type="password" inputRef={checkpasswordRef} placeholder="비밀번호 확인" />
      </AuthsInput>
      <AuthsBtn>
        <Button onClick={handleSignUpClick} text="가입하기"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
