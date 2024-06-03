import React from 'react';
import PostFile from './PostFile';
import { v4 as uuidv4 } from 'uuid';
import {
  ImagePreviewContainer,
  ImageContainer,
  ImagePreview,
  DeleteButton,
  StyledUploadArea,
  CenteredText
} from '../PostAddPage.styled';

const PostImg = ({ images, setImages }) => {
  // 파일 입력 엘리먼트에서 이미지가 선택될 때 호출되는 함수
  const handleImageChange = (files) => {
    // 선택된 이미지를 이미지 배열에 추가
    if (images.length + files.length <= 5) {
      const newImages = files.map((file) => ({
        file,
        id: uuidv4() // 고유한 id 생성
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  // 드래그 앤 드롭으로 파일이 추가될 때 호출되는 함수
  const handleDrop = (files) => {
    if (images.length + files.length <= 5) {
      const newImages = files.map((file) => ({
        file,
        id: uuidv4()
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  // 드래그 오버 이벤트를 처리하여 기본 동작을 방지하는 함수
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // 선택한 이미지 삭제하는 함수
  const handleImageRemove = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <>
      <ImagePreviewContainer>
        {images.map((image, index) => (
          <ImageContainer key={image.id}>
            {image.file instanceof Blob ? (
              <ImagePreview src={URL.createObjectURL(image.file)} alt={`preview ${index}`} />
            ) : (
              <span>이미지 로드 실패</span>
            )}
            <DeleteButton onClick={() => handleImageRemove(image.id)}>삭제</DeleteButton>
          </ImageContainer>
        ))}
      </ImagePreviewContainer>
      <StyledUploadArea>
        <PostFile onFileChange={handleImageChange} onDrop={handleDrop} onDragOver={handleDragOver}>
          <CenteredText>여기에 파일을 드래그하거나 클릭하여 업로드</CenteredText>
        </PostFile>
      </StyledUploadArea>
    </>
  );
};

export default PostImg;
