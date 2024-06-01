import React from 'react';
import { SlArrowUpCircle } from 'react-icons/sl';
import styled from 'styled-components';

const StUpIcon = styled(SlArrowUpCircle)`
  font-size: 2rem;
  cursor: pointer;
`;

export default function HomePage() {
  return (
    <>
      <div>HomePage: main</div>;
      <StUpIcon />
    </>
  );
}
