import React from 'react';
import { StyledModalImg, StyledModalContent, CloseButton } from '../PostAddPage.styled';

const ModalImg = ({ imgSrc, onClose }) => {
  return (
    <StyledModalImg>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>  {/* 모달 컨텐츠 */}
        <CloseButton onClick={onClose}>X</CloseButton>
        {/* 이미지가 있으면 표시하고 없으면 '로딩 중...' 메시지 표시 */}
        {imgSrc ? <img src={imgSrc} alt="larged" style={{ maxHeight: '100%', maxWidth: '100%' }} /> : 'Loading...'}
      </StyledModalContent>
    </StyledModalImg>
  );
};

export default ModalImg;

//stop~~은 이벤트 전파 중지 메서드로 부모 요소한테 전달이 중단됩니다! 해당 요소에서 이벤트가 더이상 상위 요소로 전달되지 않아요!! => 모달이 열려있는 동안은 바깥 요소를 클릭해도 모달이 안닫히게 하는겁니다!