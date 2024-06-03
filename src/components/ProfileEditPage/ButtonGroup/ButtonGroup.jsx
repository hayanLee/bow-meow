import Button from '../ProfileEditPage.styles/Button.styled';
import StButtonGroup from './ButtonGroup.styled';

function ButtonGroup(props) {
  return (
    <StButtonGroup>
      <Button>회원탈퇴</Button>
      <Button>뒤로가기</Button>
      <Button>수정하기</Button>
    </StButtonGroup>
  );
}
export default ButtonGroup;
