import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal/LoginModal';

function Layout() {
  return (
    <div>
      <LoginModal />
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
