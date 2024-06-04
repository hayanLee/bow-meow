import { StPost } from './Post.styled';

function Post({ image, date }) {
  return <StPost $image={image}>{date}</StPost>;
}
export default Post;
