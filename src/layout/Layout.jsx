import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal/LoginModal';
import ImageMasonry from './Masonry';

function Layout() {
  return (
    <div>
      <LoginModal />
      <Header />
      <LayoutContainer>
        <ImageMasonry />
        <Outlet />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
