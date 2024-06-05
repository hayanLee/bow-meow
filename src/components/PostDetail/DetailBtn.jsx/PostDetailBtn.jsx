// import React from 'react';
// import { StyledBtnContainer, StyledEditBtn, StyledDeleteBtn } from '../PostDetail.styled';
// import { useDispatch } from 'react-redux';
// import { deletePost } from '../../../redux/slices/postReducer.slice';
// import { useNavigate } from 'react-router-dom';

// const PostDetailBtn = ({ postId }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // 게시물 삭제 기능
//   const handleDetailDelete = () => {
//     const isConfirmed = window.confirm('정말로 삭제하시겠습니까?');
//     if (isConfirmed) {
//       dispatch(deletePost(post.postId));
//       alert('해당 게시물이 삭제되었습니다!');
//       navigate(`/myPage`);
//     }
//   };

//   const moveEdit = () => {
//     navigate(`/posts/${post.postId}/postEdit`);
//   };

//   return (
//     <StyledBtnContainer>
//       <StyledEditBtn type="button" onClick={moveEdit}>
//         수정
//       </StyledEditBtn>
//       <StyledDeleteBtn type="button" onClick={handleDetailDelete}>
//         삭제
//       </StyledDeleteBtn>
//     </StyledBtnContainer>
//   );
// };

// export default PostDetailBtn;
