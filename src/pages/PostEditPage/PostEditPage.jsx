import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../redux/slices/postReducer.slice';
import { clearImg } from '../../redux/slices/postImgReducer.slice';
import ImgUpdate from '../../components/PostEdit/ImgUpdate';
import { StyledContainer, StyledPostBox, StyledPostInput, StyledPostContent, StyledPostBtn, StyledRightContainer, StyledBtnContainer, StyledContentContainer, StyledLeftContainer } from '../../components/PostAdd/PostAddPage.styled';

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
    if (!title || !content || !images) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }

    const updatedPost = {
      ...post,
      title,
      content,
      images: images.map((img) => ({
        url: img.url || URL.createObjectURL(img.file)
      }))
    };

    console.log('Updating post:', updatedPost);
    dispatch(updatePost({ postId, updatedData: updatedPost }));

    dispatch(clearImg());

    setTitle('');
    setContent('');

    alert('성공적으로 수정되었습니다!');
    navigate(`/posts/${postId}`);
  };

  return (
    <StyledContainer>
      <StyledPostBox>
        <StyledContentContainer>
          <StyledLeftContainer>
            <ImgUpdate existingImages={existingImages} postId={postId} />
          </StyledLeftContainer>
          <StyledRightContainer>
            <StyledPostInput type="text" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
            <StyledPostContent placeholder="내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value)} />
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
