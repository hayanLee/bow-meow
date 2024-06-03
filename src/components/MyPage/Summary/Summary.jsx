import StSummary from './Summary.styled';

import Label from './../MyPage.styles/Label.styled';

function Summary({ className, ...props }) {
  return (
    <StSummary>
      <Label> (임시)좋아요 수 </Label>
      <Label> (임시)작성한 게시물 수 </Label>
      <Label> (임시)댓글 수 </Label>
    </StSummary>
  );
}
export default Summary;
