import React from 'react';
import { StUpIcon } from './WriteButton.styled';
import { BiSolidPencil } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const WriteButton = () => {
  const navigate = useNavigate();

  const goPostAdd = () => {
    navigate('/PostAdd');
  };
  return (
    <StUpIcon>
        <BiSolidPencil onClick={goPostAdd} />
    </StUpIcon>
  );
};

export default WriteButton;
