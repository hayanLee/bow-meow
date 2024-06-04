import { useRef, useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SignUp() {
  const emailRef = useRef(null);
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);
  const checkpasswordRef = useRef(null);

  const [form, setForm] = useState({
    nickname: '',
    signEmail: '',
    signPw: '',
    checkPw: ''
  });

  const handleSignUpClick = () => {
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
  };
  console.log(form);
  return (
    <div className="signupForm">
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
          <Button type="submit" onClick={handleSignUpClick} text="가입하기"></Button>
        </AuthsBtn>
      </Wrapper>
    </div>
  );
}
