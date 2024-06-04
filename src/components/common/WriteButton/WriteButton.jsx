import React from 'react';
import { StUpIcon } from './WriteButton.styled';
import { BiSolidPencil } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const WriteButton = () => {
  const navigate = useNavigate();

  const goPostAdd = () => {
    navigate('/postAdd');
  };

  return (
    <StUpIcon>
      <button onClick={goPostAdd}>
        <BiSolidPencil />
      </button>
    </StUpIcon>
  );
};

export default WriteButton;
