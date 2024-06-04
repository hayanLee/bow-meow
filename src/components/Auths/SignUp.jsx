import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SignUp() {
  const [form, setForm] = useState({
    signid: '',
    nickname: '',
    signEmail: '',
    signPw: '',
    checkPw: ''
  });

  const handleSignUpClick = () => {
    if (!form.signid || !form.nickname || !form.signEmail || !form.signPw || !form.checkPw) {
      alert('내용을 모두 입력하세요.');
    }
    if (form.signPw !== form.checkPw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  return (
    <div className="signupForm">
      <Wrapper>
        멍멍냥냥 회원가입
        <AuthsInput>
          <Input
            type="id"
            placeholder="아이디"
            value={form.signId}
            onChange={(e) => setForm({ ...form, id: e.target })}
          />
          <Input
            type="nickname"
            placeholder="닉네임"
            value={form.nickname}
            onChange={(e) => setForm({ ...form, id: e.target })}
          />
          <Input
            type="email"
            placeholder="이메일"
            value={form.signEmail}
            onChange={(e) => setForm({ ...form, id: e.target })}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={form.signPw}
            onChange={(e) => setForm({ ...form, id: e.target })}
          />
          <Input
            type="passwordcheck"
            placeholder="비밀번호 확인"
            value={form.checkPw}
            onChange={(e) => setForm({ ...form, id: e.target })}
          />
        </AuthsInput>
        <AuthsBtn>
          <Button onClick={handleSignUpClick} text="가입하기"></Button>
        </AuthsBtn>
      </Wrapper>
    </div>
  );
}
