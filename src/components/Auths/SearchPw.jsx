import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SearchPw() {
  return (
    <Wrapper>
      비밀번호 찾기
      <AuthsInput>
        <Input type="text" placeholder="아이디를 입력해주세요" />
        <Input type="text" placeholder="이메일을 입력해주세요" />
      </AuthsInput>
      <AuthsBtn>
        <Button text="조회"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
