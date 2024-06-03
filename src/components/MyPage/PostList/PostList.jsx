import Post from './../MyPage.styles/Post.styled';

function PostList({ className, ...props }) {
  return (
    <>
      <p> 내가 작성한 포스트 </p>
      <div className={className}>
        <Post> 포스트: 123 </Post>
        <Post> 포스트: 456 </Post>
        <Post> 포스트: abc </Post>
        <Post> 포스트: def </Post>
        <Post> 포스트: zxc </Post>
        <Post> 포스트: asd </Post>
        <Post> 포스트: qwe </Post>
        <Post> 포스트: 321 </Post>
        <Post> 포스트: 654 </Post>
        <Post> 포스트: 987 </Post>
        <Post> 포스트: hgf </Post>
        <Post> 포스트: poi </Post>
      </div>
    </>
  );
}
export default PostList;
