import React from 'react';
import { StWriteIcon } from './WriteButton.styled';
import { useNavigate } from 'react-router-dom';

const WriteButton = () => {
  const navigate = useNavigate();

  const goPostAdd = () => {
    navigate('/postAdd');
  };

  return (
    <>
      <button onClick={goPostAdd}>
        <StWriteIcon />
      </button>
    </>
  );
};

export default WriteButton;
