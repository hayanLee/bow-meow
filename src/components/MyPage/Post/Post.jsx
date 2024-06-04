import { useNavigate } from 'react-router-dom';
import { StPost, StSpan } from './Post.styled';

function Post({ image, date, postId }) {
  const navigate = useNavigate();

  function handlePostClick() {
    navigate(`/posts/${postId}`);
  }

  return (
    <StPost onClick={handlePostClick} $image={image}>
      <StSpan>{date}</StSpan>
    </StPost>
  );
}
export default Post;
