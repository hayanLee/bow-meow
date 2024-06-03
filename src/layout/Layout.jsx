import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import { LayoutContainer } from './Layout.styled';

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
