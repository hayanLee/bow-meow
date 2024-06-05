import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImg, removeImg, addExistingImg } from '../../redux/slices/postImgReducer.slice';
import { ImagePreviewContainer, ImageContainer, ImagePreview, DeleteButton, StyledUploadArea, CenteredText } from '../PostAdd/PostAddPage.styled';
import PostFile from '../PostAdd/PostImgUpload/PostFile';

const ImgUpdate = ({ existingImages = [], postId }) => {
  const [largedImage, setLargedImage] = useState(null);
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images || []);

  useEffect(() => {
    const initialImageObjects = existingImages.map((url) => url);
    dispatch(addExistingImg(initialImageObjects));
  }, [dispatch, existingImages]);

  const handleImageChange = (files) => {
    if (images.length + files.length <= 5) {
      dispatch(addImg(files));
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleDrop = (files) => {
    if (images.length + files.length <= 5) {
      dispatch(addImg(files));
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageRemove = (id) => {
    dispatch(removeImg(id));
  };

  const handleImageClick = (imageUrl) => {
    setLargedImage(imageUrl);
  };

  const closeLargedImage = () => {
    setLargedImage(null);
  };

  useEffect(() => {
    console.log('Redux Store Images:', images);
  }, [images]);

  return (
    <>
      {largedImage && <ModalImg imgSrc={largedImage} onClose={closeLargedImage} />}
      <ImagePreviewContainer>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            {image.type === 'new' ? (
              <ImagePreview
                src={URL.createObjectURL(image.file)}
                alt={`preview ${index}`}
                onClick={() => handleImageClick(URL.createObjectURL(image.file))}
              />
            ) : (
              <ImagePreview
                src={image.url}
                alt={`preview ${index}`}
                onClick={() => handleImageClick(image.url)}
              />
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
