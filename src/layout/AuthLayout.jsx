import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_img.png';
import { StLayout, StLogo, Wrapper } from './AuthLayout.styled';

function AuthLayout() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/auth/logIn');
  };

  return (
    <Wrapper>
      <StLayout>
        <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
        <Outlet />
      </StLayout>
    </Wrapper>
  );
}

export default AuthLayout;
