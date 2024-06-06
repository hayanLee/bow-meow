import React from 'react';
import logoImg from '../../assets/logo_img.png';
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
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const homePageBtn = () => {
    navigate('/');
  };

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
          <StLogin
            onClick={() => {
              navigate('/auth/login');
            }}
          >
            로그인
          </StLogin>
          <ProfileMyPageBtn
            onClick={() => {
              navigate('/myPage');
            }}
          >
            profile
          </ProfileMyPageBtn>
        </StRight>
      </StContainer>
    </StHeader>
  );
}

export default Header;
