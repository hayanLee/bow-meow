import { memo } from 'react';

import StPostList from './PostList.styled';
import Post from './../Post';

function PostList({ userWrittenPostList }) {
  const extractedPosts = userWrittenPostList.map((post) => ({ image: post.images[0], date: post.date }));

  return (
    <StPostList>
      {extractedPosts.map((post) => (
        <Post image={post.image} date={post.date} />
      ))}
    </StPostList>
  );
}
export default memo(PostList);
