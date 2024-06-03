import { Outlet } from 'react-router-dom';
import { StLayout, Wrapper } from './AuthLayout.styled';
import logo from '../assets/logo_img.png';

function AuthLayout() {
  return (
    <Wrapper>
      <StLayout>
        <img src={logo} alt="로고이미지" />
        <Outlet />
      </StLayout>
    </Wrapper>
  );
}

export default AuthLayout;
