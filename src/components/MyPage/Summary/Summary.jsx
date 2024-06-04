import { StLabel } from '../MyPage.styles/MyPage.styled';
import StSummary from './Summary.styled';

function Summary(props) {
  const { totalLiked, totalPosts, totalComments } = props;
  return (
    <StSummary>
      <StLabel>
        <span>❤️</span>
        <span>{totalLiked}</span>
      </StLabel>
      <StLabel>
        <span>🐶</span>
        <span>{totalPosts}</span>
      </StLabel>
      <StLabel>
        <span>😺</span>
        <span>{totalComments}</span>
      </StLabel>
    </StSummary>
  );
}
export default Summary;
