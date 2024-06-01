import React from 'react';
import logoImg from '../../assets/logo.png';
import Navbar from './Navbar';
import {
  StContainer,
  StHambuger,
  StHeader,
  StLogo,
  StSearchIcon,
  StSearchInput,
  StSearchWrapper
} from './common.styles/Header.styled';

function Header() {
  return (
    <StHeader>
      <StLogo src={logoImg} alt="logo" />

      <StContainer>
        <Navbar />
        <StSearchWrapper>
          <StSearchInput type="text" />
          <StSearchIcon />
        </StSearchWrapper>
        <StHambuger />
      </StContainer>
    </StHeader>
  );
}

export default Header;
 