import React from 'react';
import logoImg from '../../assets/logo.png';
import Input from '../common/Input';
import Navbar from '../common/Navbar';
import { StContainer, StHamburger, StHeader, StLogo, StSearchIcon, StSearchWrapper } from './Header.styled';
function Header() {
  return (
    <StHeader>
      <StLogo src={logoImg} alt="logo" />

      <StContainer>
        <Navbar />
        <StSearchWrapper>
          <Input />
          <StSearchIcon />
        </StSearchWrapper>
        <StHamburger />
      </StContainer>
    </StHeader>
  );
}

export default Header;
