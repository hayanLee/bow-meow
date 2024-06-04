import React from 'react';
import { StSearchInput } from './Input.styled';

export default function Input({ type, inputRef, placeholder, value, onChange }) {
  return (
    <>
      <StSearchInput type={type} ref={inputRef} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
}
