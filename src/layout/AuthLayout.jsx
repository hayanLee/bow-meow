import { Outlet } from 'react-router-dom';
import { StLayout, Wrapper } from './AuthLayout.styled';
import logo from '../assets/logo_img.png';
import { useNavigate } from 'react-router-dom';

function AuthLayout() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/auth/logIn');
  };

  return (
    <Wrapper>
      <StLayout>
        <img onClick={handleLogoClick} src={logo} alt="로고이미지" />
        <Outlet />
      </StLayout>
    </Wrapper>
  );
}

export default AuthLayout;
