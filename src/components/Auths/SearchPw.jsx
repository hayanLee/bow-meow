import { useState } from 'react';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SearchPw() {
  const [id, setId] = useState();
  const [searchEmail, setSearchEmail] = useState();

  const handleSearchPWClick = () => {
    if (!id || !searchEmail) {
      alert('아이디와 이메일을 모두 입력하세요.');
    }
  };

  return (
    <Wrapper>
      비밀번호 찾기
      <AuthsInput>
        <Input type="text" placeholder="아이디를 입력해주세요" value={id} onChange={(e) => setId(e.target.value)} />
        <Input
          type="text"
          placeholder="이메일을 입력해주세요"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
      </AuthsInput>
      <AuthsBtn>
        <Button onClick={handleSearchPWClick} text="조회"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
