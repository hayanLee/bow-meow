import React from 'react';
import { StSearchInput } from './Input.styled';

export default function Input({inputRef, placeholder, value, onChange }) {
  return (
    <>
      <StSearchInput 
      ref={inputRef} 
      placeholder={placeholder}
      value={value} 
      onChange={onChange} />
    </>
  );
}
