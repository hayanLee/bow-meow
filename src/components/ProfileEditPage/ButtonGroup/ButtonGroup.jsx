import { StButtonGroup, StRightGroup, StLeftGroup } from './ButtonGroup.styled';
import Button from './../../common/Button/Button';

function ButtonGroup(props) {
  return (
    <StButtonGroup>
      <StLeftGroup>
        <Button text="회원탈퇴" />
      </StLeftGroup>
      <StRightGroup>
        <Button text="뒤로가기" />
        <Button text="수정하기" />
      </StRightGroup>
    </StButtonGroup>
  );
}
export default ButtonGroup;
