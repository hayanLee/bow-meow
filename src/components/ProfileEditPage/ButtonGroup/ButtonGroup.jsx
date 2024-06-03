import StButtonGroup from './ButtonGroup.styled';
import Button from './../../common/Button/Button';

function ButtonGroup(props) {
  return (
    <StButtonGroup>
      <Button text="회원탈퇴" />
      <Button text="뒤로가기" />
      <Button text="수정하기" />
    </StButtonGroup>
  );
}
export default ButtonGroup;
