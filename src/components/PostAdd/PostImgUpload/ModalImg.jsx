// Modal.js
import React from 'react';
import { StyledModalImg, StyledModalContent } from '../PostAddPage.styled';

const ModalImg = ({ imgSrc, onClose }) => {
  return (
    <StyledModalImg onClick={onClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt="larged"/>
      </StyledModalContent>
    </StyledModalImg>
  );
};

export default ModalImg;
