import React from 'react';
import logoImg from '../../assets/logo_img.png';
import Input from '../common/Input';
import {
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
  return (
    <StHeader>
      <StContainer>
        <StLeft>
          <StLogo src={logoImg} alt="logo" />
          <StTitle>멍멍냥냥</StTitle>
        </StLeft>

        <StRight>
          <StSearchWrapper>
            <Input />
            <StSearchIcon />
          </StSearchWrapper>
          <StLogin>로그인</StLogin>
        </StRight>
      </StContainer>
    </StHeader>
  );
}

export default Header;
