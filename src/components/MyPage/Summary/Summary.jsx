import { memo } from 'react';

import { StLabel } from '../MyPage.styles/MyPage.styled';
import StSummary from './Summary.styled';

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
        <span>좋아요</span>
        <span> {0}</span>
      </StLabel>
      <StLabel>
        <span>🐶</span>
        <span>작성 게시글</span>
        <span> {totalPosts}</span>
      </StLabel>
      <StLabel>
        <span>😺</span>
        <span>받은 댓글 </span>
        <span>{0}</span>
      </StLabel>
    </StSummary>
  );
}
export default memo(Summary);
