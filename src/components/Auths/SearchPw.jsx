import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SearchPw() {
  const [searchEmail, setSearchEmail] = useState();

  const handleSearchPWClick = () => {
    if (!searchEmail) {
      alert('내용을 입력하세요.');
    }
  };

  return (
    <Wrapper>
      <p>비밀번호 재설정</p>
      <AuthsInput>
        <Input
          type="text"
          placeholder="이메일을 입력하세요"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
      </AuthsInput>
      <AuthsBtn>
        <Button type="submit" onClick={handleSearchPWClick} text="조회"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
