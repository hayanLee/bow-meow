import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  CenteredText,
  ImagePreview,
  ImagePreviewContainer,
  StyledBtnContainer,
  StyledContainer,
  StyledContentContainer,
  StyledLeftContainer,
  StyledPostBox,
  StyledPostBtn,
  StyledPostContent,
  StyledPostInput,
  StyledRightContainer,
  StyledUploadArea
} from '../../components/PostEdit/PostEditPage.styled';
import PostUpload from '../../components/PostEdit/PostUpload';

/// 게시물 수정 페이지로 로직 바꿀 예정
function PostEditPage({ onPostSubmit }) {
  // 이미지, 제목, 내용 상태를 useState 훅을 통해 관리
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [content, setContent] = useState('');

  // 파일 입력 엘리먼트에서 이미지가 선택될 때 호출되는 함수
  const handleImageChange = (files) => {
    // 선택된 이미지를 이미지 배열에 추가
    if (images.length + files.length <= 5) {
      setImages((prevImages) => [...prevImages, ...files]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  // 드래그 앤 드롭으로 파일이 추가될 때 호출되는 함수
  const handleDrop = (files) => {
    if (images.length + files.length <= 5) {
      setImages((prevImages) => [...prevImages, ...files]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  // 드래그 오버 이벤트를 처리하여 기본 동작을 방지하는 함수
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !content) {
      alert('제목과 내용 모두 입력해주세요!!');
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
  };

  return (
    <StyledContainer>
      <StyledPostBox onSubmit={handleSubmit}>
        <StyledContentContainer>
          <StyledLeftContainer>
            <StyledUploadArea>
              {/*이미지 업로드 부분*/}
              <PostUpload
                value={images}
                onFileChange={handleImageChange}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {images.length === 0 && <CenteredText>여기에 파일을 드래그하거나 클릭하여 업로드</CenteredText>}
                <ImagePreviewContainer>
                  {images.map((image, index) => (
                    <ImagePreview key={index} src={URL.createObjectURL(image)} alt={`preview ${index}`} />
                  ))}
                </ImagePreviewContainer>
              </PostUpload>
            </StyledUploadArea>
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
          <StyledPostBtn type="submit">작성 완료</StyledPostBtn>
        </StyledBtnContainer>
      </StyledPostBox>
    </StyledContainer>
  );
}

export default PostEditPage;
