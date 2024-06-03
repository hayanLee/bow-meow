import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import PostImg from '../../components/PostAdd/PostImgUpload/PostImg'
import { Link } from 'react-router-dom';

function PostAddPage({ onPostSubmit }) {
  // 이미지, 제목, 내용 상태를 useState 훅을 통해 관리
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || images.length === 0 || !content) {
      alert('칸을 모두 채워주세요!!');
      return;
    }

    const newPost = {
      id: uuidv4(),
      title,
      content,
      images,
      thumbnail: images.length > 0 ? images[0] : null
    };

    console.log('Submitting post:', newPost); // 콘솔 로그 추가
    onPostSubmit(newPost);

    setTitle('');
    setImages([]);
    setContent('');

    alert('성공적으로 작성되었습니다!');
    // 작성이 완료된 후에 마이페이지로 이동
  };

  return (
    <StyledContainer>
      <StyledPostBox>
        <StyledContentContainer>
          <StyledLeftContainer>
            <PostImg images={images} setImages={setImages}/>
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
            작성 완료
          </StyledPostBtn>
        </StyledBtnContainer>
      </StyledPostBox>
    </StyledContainer>
  );
}

export default PostAddPage;
