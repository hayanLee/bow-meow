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
      <StWriteIcon onClick={goPostAdd} />
    </>
  );
};

export default WriteButton;
