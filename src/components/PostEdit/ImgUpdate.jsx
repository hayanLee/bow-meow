import {
  ImagePreviewContainer,
  ImageContainer,
  ImagePreview,
  DeleteButton,
  StyledUploadArea,
  CenteredText
} from '../PostAdd/PostAddPage.styled';

import React, { forwardRef, useImperativeHandle, useState } from 'react';

import PostFile from '../PostAdd/PostImgUpload/PostFile';
import ModalImg from './../PostAdd/PostImgUpload/ModalImg';

// 수정페이지에서 이미지는 수정이 안됩니당........
const ImgUpdate = forwardRef(({ defaultImages = [] }, ref) => {
  const [largedImage, setLargedImage] = useState(null);

  //const images = useSelector((state) => state.images.images || []); // Redux 스토어에서 이미지 가져오기
  //const images = [];

  const [imagesToUpload, setImagesToUpload] = useState(defaultImages);

  useImperativeHandle(ref, () => {
    return {
      get: () => {
        return imagesToUpload;
      }
    };
  });

  const handleImageChange = (files) => {
    if (imagesToUpload.length + files.length <= 5) {
      const addedImages = files.map((file) => URL.createObjectURL(file));

      //dispatch(addImg(formattedFiles));
      // 이미지 ID들을 업데이트

      setImagesToUpload([...imagesToUpload, ...addedImages]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleDrop = (files) => {
    console.log('!!!!!!!!!dropped!!!!!!!!');

    if (imagesToUpload.length + files.length <= 5) {
      const addedImages = files.map((file) => URL.createObjectURL(file));

      //dispatch(addImg(formattedFiles));
      // 이미지 ID들을 업데이트

      setImagesToUpload([...imagesToUpload, ...addedImages]);
    } else {
      alert('이미지는 최대 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageRemove = (e, imgIdx) => {
    e.preventDefault();

    imagesToUpload.splice(imgIdx, 1);
    setImagesToUpload([...imagesToUpload]);

    //dispatch(removeImg(id));
    // 업로드할 이미지에서 삭제
    //setImagesToUpload(imagesToUpload.filter((imageId) => imageId !== id));
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
        {/* {defaultImages.map((image) => (
          <ImageContainer key={image.id}>
            <ImagePreview
              key={image.id}
              src={image}
              alt={`preview ${image}`}
              onClick={() => handleImageClick(image.file)}
            />
            <DeleteButton onClick={(e) => handleImageRemove(e)}>삭제</DeleteButton>
          </ImageContainer>
        ))} */}
        {/* 새로 추가된 이미지들 렌더링 */}
        {imagesToUpload.map((image, idx) => (
          <ImageContainer key={idx}>
            {
              <ImagePreview src={image} alt={`preview ${image.id}`} onClick={() => handleImageClick(image)} /> /*  : (
              <span>에러발생</span>
            ) */
            }
            <DeleteButton onClick={(e) => handleImageRemove(e, idx)}>삭제</DeleteButton>
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
});

export default ImgUpdate;
