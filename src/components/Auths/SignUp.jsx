import { useRef, useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';
import supabase from '../../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';

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
        // checkPw: checkpasswordRef.current.value
      });
      console.log(data);
      if (error) {
        // throw error;
        console.log(error);
      }

      const userData = await supabase.from('users').insert({
        uuid: data.user.id,
        email: data.user.email,
        nickname: nicknameRef.current.value,
        profile_img: 'https://suwbeekhficjymjlqdve.supabase.co/storage/v1/object/public/profile/defaultProfile.jpg',
        created_at: new Date()
      });
      console.log(userData);
    } catch (error) {
      console.log(error);
    }

    // 성공적인 회원가입 후 로그인 페이지로 이동

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
        <Input
          type="text"
          inputRef={emailRef}
          placeholder="이메일"
          // value={form.signEmail}
          // onChange={(e) => setForm({ ...form, signEmail: e.target.value })}
        />
        <Input
          type="text"
          inputRef={nicknameRef}
          placeholder="닉네임"
          // value={form.nickname}
          // onChange={(e) => setForm({ ...form, nickname: e.target.value })}
        />
        <Input
          type="text"
          inputRef={passwordRef}
          placeholder="비밀번호"
          // value={form.signPw}
          // onChange={(e) => setForm({ ...form, signPw: e.target.value })}
        />
        <Input
          type="text"
          inputRef={checkpasswordRef}
          placeholder="비밀번호 확인"
          // value={form.checkPw}
          // onChange={(e) => setForm({ ...form, checkPw: e.target.value })}
        />
      </AuthsInput>
      <AuthsBtn>
        <Button onClick={handleSignUpClick} text="가입하기"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
