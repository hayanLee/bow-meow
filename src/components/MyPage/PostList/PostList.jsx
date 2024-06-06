import { memo } from 'react';

import StPostList from './PostList.styled';
import Post from './../Post';

function PostList({ userPostList }) {
  console.log('userPostList ↓');
  console.dir(userPostList);

  return (
    <StPostList>
      {userPostList.map((post) => {
        const yyyy_mm_dd = post.created_at.slice(0, 10);

        return <Post key={post.id} image={post.image} date={yyyy_mm_dd} postId={post.id} />;
      })}
    </StPostList>
  );
}
export default memo(PostList);
