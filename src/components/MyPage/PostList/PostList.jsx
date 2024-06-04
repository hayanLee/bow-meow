import { memo } from 'react';

import StPostList from './PostList.styled';
import Post from './../Post';

function PostList({ userWrittenPostList }) {
  return (
    <StPostList>
      {userWrittenPostList.map((post) => (
        <Post key={post.postId} image={post.images[0]} date={post.date} postId={post.postId} />
      ))}
    </StPostList>
  );
}
export default memo(PostList);
