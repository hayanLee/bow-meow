import { StButtonGroup, StRightGroup, StLeftGroup } from './ButtonGroup.styled';
import Button from './../../common/Button/Button';
import { forwardRef } from 'react';

const ButtonGroup = forwardRef((props, ref) => {
  function handleEditButtonClick() {
    ref.current.handleEditButtonClick();
  }

  return (
    <StButtonGroup>
      <StLeftGroup>
        <Button text="회원탈퇴" />
      </StLeftGroup>
      <StRightGroup>
        <Button text="뒤로가기" />
        <Button onClick={handleEditButtonClick} text="수정하기" />
      </StRightGroup>
    </StButtonGroup>
  );
});

export default ButtonGroup;
