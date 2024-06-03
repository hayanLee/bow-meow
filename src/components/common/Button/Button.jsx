import React from 'react';
import { StBtn } from './Button.styled';

/* 
<Button text="버튼입니다" onClick={() => console.log('첫번째 버튼 클릭함')} />
<Button text="두번째 버튼" onClick={() => console.log('두번째 버튼 클릭함')} /> 
*/

function Button({ text, onClick }) {
  return <StBtn onClick={onClick}>{text}</StBtn>;
}

export default Button;
