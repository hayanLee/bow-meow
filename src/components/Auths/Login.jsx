import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { AuthsBtn, AuthsInput, SearchIdPw, Wrapper } from './Login.styled';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/auth/signUp');
  };

  const handleSearchIdClick = () => {
    navigate('/auth/searchId');
  };

  const handleSearchPWClick = () => {
    navigate('/auth/searchPW');
  };

  return (
    <Wrapper>
      <AuthsInput>
        <Input type="text" placeholder="아이디를 입력하세요" />
        <Input type="text" placeholder="비밀번호를 입력하세요" />
      </AuthsInput>
      <AuthsBtn>
        <Button text="로그인"></Button>
        <Button onClick={handleSignUpClick} text="회원가입"></Button>
      </AuthsBtn>
      <SearchIdPw>
        <div onClick={handleSearchIdClick}>아이디 찾기</div>
        <div>|</div>
        <div onClick={handleSearchPWClick}>비밀번호 찾기</div>
      </SearchIdPw>
    </Wrapper>
  );
}
