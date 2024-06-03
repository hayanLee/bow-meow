import React from 'react';
import { StSearchInput } from './Input.styled';

export default function Input({ placeholder }) {
  return (
    <>
      <StSearchInput type="text" placeholder={placeholder} />
    </>
  );
}
