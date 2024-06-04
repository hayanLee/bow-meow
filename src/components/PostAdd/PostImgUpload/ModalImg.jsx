import React from 'react';
import { StyledModalImg, StyledModalContent, CloseButton } from '../PostAddPage.styled';

const ModalImg = ({ imgSrc, onClose }) => {
  return (
    <StyledModalImg>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {imgSrc ? <img src={imgSrc} alt="larged" style={{ maxHeight: '100%', maxWidth: '100%' }} /> : 'Loading...'}
      </StyledModalContent>
    </StyledModalImg>
  );
};

export default ModalImg;

// 추가하는거 redux