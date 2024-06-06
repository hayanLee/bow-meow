import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';
import { forgetPassWord } from '../../supabase/auth.login';

export default function SearchPw() {
  const [email, setEmail] = useState('');

  const onForgetPassword = async () => await forgetPassWord(form.email);

  return (
    <Wrapper>
      <p>이메일로 링크가 전송됩니다</p>
      <AuthsInput>
        <Input type="text" placeholder="이메일을 입력하세요" value={email} onChange={(e) => setEmail(e.target.value)} />
      </AuthsInput>
      <AuthsBtn>
        <Button type="submit" onClick={onForgetPassword} text="전송"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
