import Button from '../ProfileEditPage.styles/Button.styled';

function ButtonGroup({ className, ...props }) {
  return (
    <div className={className}>
      <Button>뒤로가기</Button>
      <Button>수정하기</Button>
    </div>
  );
}
export default ButtonGroup;
