import { StPost, StSpan } from './Post.styled';

function Post({ image, date }) {
  function handlePostClick() {
    console.log('clicked');
  }

  return (
    <StPost onClick={handlePostClick} $image={image}>
      <StSpan>{date}</StSpan>
    </StPost>
  );
}
export default Post;
