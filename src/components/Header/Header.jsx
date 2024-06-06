import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo_img.png';
import { getUserToken } from '../../supabase/auth.login';
import Input from '../common/Input';
import {
  ProfileMyPageBtn,
  StContainer,
  StHeader,
  StLeft,
  StLogin,
  StLogo,
  StRight,
  StSearchIcon,
  StSearchWrapper,
  StTitle
} from './Header.styled';

function Header() {
  const navigate = useNavigate();

  const homePageBtn = () => {
    navigate('/');
  };

  const accessToken = getUserToken();

  return (
    <StHeader>
      <StContainer>
        <StLeft>
          <StLogo src={logoImg} alt="logo" onClick={homePageBtn} />
          <StTitle onClick={homePageBtn}>멍멍냥냥</StTitle>
        </StLeft>
        <StRight>
          <StSearchWrapper>
            <Input />
            <StSearchIcon />
          </StSearchWrapper>
          {accessToken ? (
            <ProfileMyPageBtn
              onClick={() => {
                navigate('/myPage');
              }}
            />
          ) : (
            <StLogin
              onClick={() => {
                navigate('/auth/login');
              }}
            >
              로그인
            </StLogin>
          )}
        </StRight>
      </StContainer>
    </StHeader>
  );
}

export default Header;
