import { StLabel } from '../MyPage.styles/MyPage.styled';
import StSummary from './Summary.styled';

function Summary(props) {
  return (
    <StSummary>
      <StLabel> (임시)좋아요 수 </StLabel>
      <StLabel> (임시)작성한 게시물 수 </StLabel>
      <StLabel> (임시)댓글 수 </StLabel>
    </StSummary>
  );
}
export default Summary;
