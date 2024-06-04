import { StPost } from '../MyPage.styles/MyPage.styled';
import StPostList from './PostList.styled';

function PostList(props) {
  return (
    <StPostList>
      <StPost> 포스트: 123 </StPost>
      <StPost> 포스트: 456 </StPost>
      <StPost> 포스트: abc </StPost>
      <StPost> 포스트: def </StPost>
      <StPost> 포스트: zxc </StPost>
      <StPost> 포스트: asd </StPost>
      <StPost> 포스트: qwe </StPost>
      <StPost> 포스트: 321 </StPost>
      <StPost> 포스트: 654 </StPost>
      <StPost> 포스트: 987 </StPost>
      <StPost> 포스트: hgf </StPost>
      <StPost> 포스트: poi </StPost>
    </StPostList>
  );
}
export default PostList;
