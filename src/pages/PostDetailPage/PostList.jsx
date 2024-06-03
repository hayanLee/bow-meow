import React, { useState } from 'react';
import PostAddPage from '../PostAddPage/PostAddPage';
import PostEditPage from '../PostEditPage/PostEditPage';

// 확인용으로 만들어둔거예요! 잘 들어가면 삭제하겠습니다ㅏ
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (post) => {
    setPosts((prevPosts) => {
      // 이전 게시물이 없는 경우
      if (!prevPosts || prevPosts.length === 0) {
        return [post]; // 새로운 게시물을 배열에 추가하여 반환
      } else {
        return [...prevPosts, post]; // 이전 게시물이 있는 경우 새로운 게시물을 추가하여 반환
      }
    });
  };

  return (
    <div>
      <PostAddPage onPostSubmit={handlePostSubmit} /> {/* onPostSubmit prop 전달 */}
      <PostEditPage onPostSubmit={handlePostSubmit} /> {/* onPostSubmit prop 전달 */}
      <div>
        <h2>게시물 목록</h2>
        <ul>
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {post.images &&
                  post.images.map((image, idx) => (
                    <img key={idx} src={URL.createObjectURL(image)} alt={`preview ${idx}`} />
                  ))}
              </li>
            ))
          ) : (
            <p>게시물이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
