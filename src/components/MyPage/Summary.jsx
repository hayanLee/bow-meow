import Label from './MyPage.styles/Label.styled';

function Summary({ className, ...props }) {
  return (
    <div className={className}>
      <Label> 작성한 게시물 수 </Label>
      <Label> 좋아요 수 </Label>
    </div>
  );
}
export default Summary;
