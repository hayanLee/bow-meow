import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../redux/slices/postReducer.slice';
import {
  StyledContainer,
  StyledPostBox,
  StyledPostInput,
  StyledPostContent,
  StyledPostBtn,
  StyledRightContainer,
  StyledBtnContainer,
  StyledContentContainer,
  StyledLeftContainer
} from '../../components/PostAdd/PostAddPage.styled';
import PostImg from '../../components/PostAdd/PostImgUpload/PostImg';
import { clearImg } from '../../redux/slices/postImgReducer.slice';

function PostEditPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector((state) => state.posts.posts.find((post) => post.postId === postId));
  const images = useSelector((state) => state.images.images);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [existingImages, setExistingImages] = useState([]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setExistingImages(post.images || []);
    }
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || (existingImages.length === 0 && images.length === 0) || !content) {
      alert('칸을 모두 채워주세요!!');
      return;
    }

    const updatedPost = {
      ...post,
      title,
      content,
      images: [...existingImages, ...images.map((image) => image.file)]
    };

    console.log('Updating post:', updatedPost); // 콘솔 로그 추가
    dispatch(updatePost({ postId, updatedData: updatedPost }));

    setTitle('');
    dispatch(clearImg());
    setContent('');

    alert('성공적으로 수정되었습니다!');
    navigate('/myPage'); // 수정이 완료된 후에 수정완료된 게시물로 이동
  };

  return (
    <StyledContainer>
      <StyledPostBox>
        <StyledContentContainer>
          <StyledLeftContainer>
            <PostImg existingImages={existingImages} />
          </StyledLeftContainer>
          <StyledRightContainer>
            <StyledPostInput
              type="text"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <StyledPostContent
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </StyledRightContainer>
        </StyledContentContainer>
        <StyledBtnContainer>
          <StyledPostBtn type="submit" onClick={handleSubmit}>
            수정 완료
          </StyledPostBtn>
        </StyledBtnContainer>
      </StyledPostBox>
    </StyledContainer>
  );
}

export default PostEditPage;
