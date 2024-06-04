import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';
import Header from '../components/Header';

function Layout() {
  return (
    <div>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
