import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import {
  StyledBtnContainer,
  StyledDeleteBtn,
  StyledDetailContainer,
  StyledDetailDate,
  StyledDetailImg,
  StyledDetailLeft,
  StyledDetailPageContent,
  StyledDetailRight,
  StyledDetailTitle,
  StyledDetailUser,
  StyledEditBtn,
  StyledRightUp
} from '../../components/PostDetail/PostDetail.styled';

function PostDetailPage() {
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((s) => s.postId.toString() === postId);

  if (!post) {
    return <ErrorPage />;
  }

  return (
    <StyledDetailContainer>
      <StyledBtnContainer>
        <StyledEditBtn>수정</StyledEditBtn>
        <StyledDeleteBtn>삭제</StyledDeleteBtn>
      </StyledBtnContainer>
      <StyledDetailLeft>
        <StyledDetailImg>
          {post.images && post.images.length > 0 ? (
            post.images.map((image, index) => <img key={index} src={image} alt={`Post Image ${index}`} />)
          ) : (
            <div>이미지가 없습니다</div>
          )}
        </StyledDetailImg>
        <StyledDetailUser>User ID: {post.userId}</StyledDetailUser>
      </StyledDetailLeft>
      <StyledDetailRight>
        <StyledRightUp>
          <StyledDetailTitle>{post.title}</StyledDetailTitle>
          <StyledDetailDate>{post.createdAt}</StyledDetailDate>
        </StyledRightUp>
        <StyledDetailPageContent>{post.content}</StyledDetailPageContent>
      </StyledDetailRight>
    </StyledDetailContainer>
  );
}
export default PostDetailPage;
