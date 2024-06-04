import React from 'react';
import logoImg from '../../assets/logo_img.png';
import Input from '../common/Input';
import Navbar from '../common/Navbar';
import { StContainer, StHeader, StLogin, StLogo, StSearchIcon, StSearchWrapper, StTitle } from './Header.styled';
function Header() {
  return (
    <StHeader>
      <StLogo src={logoImg} alt="logo" />
       <StTitle>멍멍냥냥</StTitle>
      <StContainer>
        <Navbar />
        <StSearchWrapper>
          <Input />
          <StSearchIcon />
        </StSearchWrapper>
        <StLogin>로그인</StLogin>
      </StContainer>
    </StHeader>
  );
}

export default Header;
