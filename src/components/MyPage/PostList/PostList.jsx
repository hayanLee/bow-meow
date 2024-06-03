import Post from './../MyPage.styles/Post.styled';

function PostList({ className, ...props }) {
  return (
    <>
      <p> 내가 작성한 포스트 </p>
      <div className={className}>
        <Post> 첫번째 포스트: 123 </Post>
        <Post> 두번째 포스트: 456 </Post>
        <Post> 세번째 포스트: 789 </Post>
      </div>
    </>
  );
}
export default PostList;