import { memo, useMemo } from 'react';

import StPostList from './PostList.styled';
import { StPost, StPostImg } from '../MyPage.styles/MyPage.styled';

function PostList({ userWrittenPostList }) {
  const postImages = useMemo(() => userWrittenPostList.map((post) => post.images[0]), [userWrittenPostList]);

  return (
    <StPostList>
      {postImages.map((postImage) => {
        return (
          <StPost>
            <StPostImg src={postImage} />
          </StPost>
        );
      })}
    </StPostList>
  );
}
export default memo(PostList);
