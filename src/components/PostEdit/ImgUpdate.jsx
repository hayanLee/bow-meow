import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImg, removeImg } from '../../redux/slices/postImgReducer.slice';
import { v4 as uuidv4 } from 'uuid';
import {
  ImagePreviewContainer,
  ImageContainer,
  ImagePreview,
  DeleteButton,
  StyledUploadArea,
  CenteredText
} from '../PostAdd/PostAddPage.styled';
import PostFile from '../PostAdd/PostImgUpload/PostFile';

const ImgUpdate = ({ existingImages = [], postId }) => {
  const [largedImage, setLargedImage] = useState(null);
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images || []); // Redux 스토어에서 이미지 가져오기
  const [uploadedImageIds, setUploadedImageIds] = useState(existingImages.map((image) => image.id)); // 이미지 ID들을 저장할 상태


  const handleImageChange = (files) => {
    if (images.length + files.length <= 5) {
      const formattedFiles = Array.from(files).map((file) => ({
        id: uuidv4(),
        file
      }));
      dispatch(addImg(formattedFiles));
      // 이미지 ID들을 업데이트
      setUploadedImageIds([...uploadedImageIds, ...formattedFiles.map((image) => image.id)]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleDrop = (files) => {
    if (images.length + files.length <= 5) {
      const formattedFiles = Array.from(files).map((file) => ({
        id: uuidv4(),
        file
      }));
      dispatch(addImg(formattedFiles));
      // 이미지 ID들을 업데이트
      setUploadedImageIds([...uploadedImageIds, ...formattedFiles.map((image) => image.id)]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageRemove = (id) => {
    dispatch(removeImg(id));
    // 이미지 ID들에서 삭제
    setUploadedImageIds(uploadedImageIds.filter((imageId) => imageId !== id));
  };

  const handleImageClick = (imageUrl) => {
    setLargedImage(imageUrl);
  };

  const closeLargedImage = () => {
    setLargedImage(null);
  };

  return (
    <>
      {largedImage && <ModalImg imgSrc={largedImage} onClose={closeLargedImage} />}
      <ImagePreviewContainer>
        {/* 기존에 입력된 이미지들 렌더링 */}
        {existingImages.map((image) => (
          <ImageContainer key={image.id}>
            <ImagePreview
              key={image.id}
              src={image.file}
              alt={`preview ${image.id}`}
              onClick={() => handleImageClick(image.file)}
            />
            <DeleteButton onClick={() => handleImageRemove(image.id)}>삭제</DeleteButton>
          </ImageContainer>
        ))}
        {/* 새로 추가된 이미지들 렌더링 */}
        {images.map((image) => (
          <ImageContainer key={image.id}>
            {image.file instanceof Blob ? (
              <ImagePreview
                key={image.id}
                src={URL.createObjectURL(image.file)}
                alt={`preview ${image.id}`}
                onClick={() => handleImageClick(URL.createObjectURL(image.file))}
              />
            ) : (
              <span>에러발생</span>
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

export default ImgUpdate;
