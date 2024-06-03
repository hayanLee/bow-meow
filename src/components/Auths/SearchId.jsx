import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SearchId() {
  return (
    <Wrapper>
      아이디 찾기
      <AuthsInput>
        <Input type="text" placeholder="이메일을 입력해주세요" />
      </AuthsInput>
      <AuthsBtn>
        <Button text="조회"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
