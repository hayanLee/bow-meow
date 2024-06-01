import React from 'react';
import { StNavbar, StUl, Stli } from './common.styles/Navbar.styled';

export default function Navbar() {
  return (
    <StNavbar>
      <StUl>
        <Stli>강아지</Stli>
        <Stli>고양이</Stli>
        <Stli>정보모음</Stli>
      </StUl>
    </StNavbar>
  );
}
