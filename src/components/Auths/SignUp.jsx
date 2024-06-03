import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import { AuthsBtn, AuthsInput, Wrapper } from './Login.styled';

export default function SignUp() {
  return (
    <Wrapper>
      멍멍냥냥 회원가입
      <AuthsInput>
        <Input type="text" placeholder="아이디" />
        <Input type="text" placeholder="닉네임" />
        <Input type="text" placeholder="이메일" />
        <Input type="text" placeholder="비밀번호" />
        <Input type="text" placeholder="비밀번호 확인" />
      </AuthsInput>
      <AuthsBtn>
        <Button text="가입하기"></Button>
      </AuthsBtn>
    </Wrapper>
  );
}
