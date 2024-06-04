import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';
import Header from '../components/Header';
import ImageMasonry from './Masonry';

function Layout() {
  return (
    <div>
      <Header />
      <LayoutContainer>
        <ImageMasonry />
        <Outlet />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
