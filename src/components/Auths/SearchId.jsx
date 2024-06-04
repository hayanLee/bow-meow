import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SearchId() {
  const [email, setEmail] = useState();

  const handleSearchClick = () => {
    if (!email) {
      alert('이메일을 입력하세요');
    }
  };
  return (
    <Wrapper>
      아이디 찾기
      <AuthsInput>
        <Input
          type="text"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </AuthsInput>
      <AuthsBtn>
        <Button onClick={handleSearchClick} text="조회"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
