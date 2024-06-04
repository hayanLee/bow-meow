import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SignUp() {
  const [signId, setSignId] = useState();
  const [nickname, setNickname] = useState();
  const [signEmail, setSignEmail] = useState();
  const [signPw, setSignPw] = useState();
  const [checkPw, setCheckPw] = useState();

  const handleSignUpClick = () => {
    if (!signId || !nickname || !signEmail || !signPw || !checkPw) {
      alert('내용을 모두 입력하세요.');
    }
  };

  return (
    <div className="signupForm">
      <Wrapper>
        멍멍냥냥 회원가입
        <AuthsInput>
          <Input type="text" placeholder="아이디" value={signId} onChange={(e) => setSignId(e.target.value)} />
          <Input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <Input type="text" placeholder="이메일" value={signEmail} onChange={(e) => setSignEmail(e.target.value)} />
          <Input type="text" placeholder="비밀번호" value={signPw} onChange={(e) => setSignPw(e.target.value)} />
          <Input type="text" placeholder="비밀번호 확인" value={checkPw} onChange={(e) => setCheckPw(e.target.value)} />
        </AuthsInput>
        <AuthsBtn>
          <Button onClick={handleSignUpClick} text="가입하기"></Button>
        </AuthsBtn>
      </Wrapper>
    </div>
  );
}
