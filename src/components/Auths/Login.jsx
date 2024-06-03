import { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { StBtn, StInput, Wrapper } from './Login.styled';

export default function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPW, setInputPW] = useState('');

  return (
    <Wrapper>
      <StInput>
        <Input
          type="text"
          placeholder="아이디를 입력하세요"
          value={inputId}
          onChange={(e) => {
            setInputId(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="비밀번호를 입력하세요"
          value={inputPW}
          onChange={(e) => {
            setInputPW(e.target.value);
          }}
        />
      </StInput>
      <StBtn>
        <Button btnText="로그인"></Button>
        <Button btnText="회원가입"></Button>
      </StBtn>
    </Wrapper>
  );
}
