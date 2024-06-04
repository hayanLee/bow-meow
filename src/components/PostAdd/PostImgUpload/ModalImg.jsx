import React from 'react';
import { StyledModalImg, StyledModalContent } from '../PostAddPage.styled';

const ModalImg = ({ imgSrc, onClose }) => {
  return (
    <StyledModalImg onClick={onClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        {imgSrc ? <img src={imgSrc} alt="Enlarged" style={{ maxHeight: '100%', maxWidth: '100%' }} /> : 'Loading...'}
      </StyledModalContent>
    </StyledModalImg>
  );
};

export default ModalImg;
