import { memo } from 'react';

import StPostList from './PostList.styled';
import Post from './../Post';

function PostList({ userPostList }) {
  console.log('userPostList ↓');
  console.dir(userPostList);

  return (
    <StPostList>
      {userPostList.map((post) => (
        <Post key={post.id} image={post.images} date={post.created_at} postId={post.id} />
      ))}
    </StPostList>
  );
}
export default memo(PostList);
