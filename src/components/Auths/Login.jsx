import { useState } from 'react';
import { StLayout } from '../../layout/AuthLayout.styled';
import Input from '../common/Input/Input';

export default function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPW, setInputPW] = useState('');

  return (
    <StLayout>
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
    </StLayout>
  );
}
