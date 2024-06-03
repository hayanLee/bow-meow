import React, { useState } from 'react';
import PostUpload from '../../components/PostEdit/PostUpload';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledContainer,
  StyledPostBox,
  StyledPostInput,
  CenteredText,
  ImagePreviewContainer,
  ImagePreview,
  StyledPostContent,
  StyledPostBtn,
  StyledUploadArea,
  StyledRightContainer,
  StyledBtnContainer,
  StyledContentContainer,
  StyledLeftContainer
} from '../../components/PostEdit/PostEditPage.styled';


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

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPostBox = styled.div`
  width: 80%;
  background-color: var(--box-color);
  border: 1px solid var(--box-color);
  border-radius: 5px;
  margin: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPostInput = styled.input`
  width: 90%;
  margin-top: 0.5rem;
  padding: 1rem;
`;

const StyledUploadArea = styled.div`
  width: 90%;
  height: auto;
  margin: 1rem 0;
  padding: 1rem;
  border: 2px dashed var(--point-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: var(--bg-color);
  color: var(--point-color);
  position: relative;
`;

const CenteredText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ImagePreviewContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledPostContent = styled.textarea`
  width: 90%;
  height: 700px; /* 원하는 높이로 설정 */
  margin: 0.5rem;
  padding: 1rem;
`;

const StyledPostBtn = styled.button`
  padding: 1rem;
  margin: 1rem;
  color: var(--text-color);
  background-color: var(--point-color);
  border: 1px solid var(--point-color);
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

export default PostEditPage;
