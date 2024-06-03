import React from 'react';
import { StLink } from './CustomLink.styled';

/*
<CustomLink to="/MyPage">마이페이지 이동</CustomLink> 
<CustomLink to="/posts">안녕하세요</CustomLink>
*/
export default function CustomLink({ to, children }) {
  return <StLink to={to}>{children}</StLink>;
}
