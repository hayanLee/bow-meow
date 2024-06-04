import { memo } from 'react';

import StSummary from './Summary.styled';
import { StLabel } from '../MyPage.styles/MyPage.styled';

function Summary({ userWrittenPostList }) {
  const { totalLiked, totalComments } = userWrittenPostList.reduce(
    ({ totalLiked, totalComments }, post) => ({
      totalLiked: totalLiked + post.likeCount,
      totalComments: totalComments + post.commentCount
    }),
    { totalLiked: 0, totalComments: 0 }
  );

  const totalPosts = userWrittenPostList.length;

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
export default memo(Summary);
