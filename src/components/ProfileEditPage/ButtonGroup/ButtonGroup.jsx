import { StButtonGroup, StRightGroup, StLeftGroup } from './ButtonGroup.styled';
import Button from './../../common/Button/Button';

import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = forwardRef((_, ref) => {
  const navigate = useNavigate();

  function handleEditButtonClick() {
    ref.current.handleEditButtonClick();
  }

  function handleBackButtonClick() {
    navigate('/');
  }

  function handleDeleteButtonClick() {}

  return (
    <StButtonGroup>
      <StLeftGroup>
        <Button onClick={handleDeleteButtonClick} text="회원탈퇴" />
      </StLeftGroup>
      <StRightGroup>
        <Button onClick={handleBackButtonClick} text="뒤로가기" />
        <Button onClick={handleEditButtonClick} text="수정하기" />
      </StRightGroup>
    </StButtonGroup>
  );
});

export default ButtonGroup;
