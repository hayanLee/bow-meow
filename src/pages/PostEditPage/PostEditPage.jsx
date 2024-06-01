import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function PostEditPage({ onPostSubmit }) {
  // 이미지, 제목, 내용 상태를 useState 훅을 통해 관리
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // 파일 입력 엘리먼트를 참조하기 위한 useRef 훅을 사용
  const fileInputRef = useRef(null);

  // 파일 입력 엘리먼트에서 이미지가 선택될 때 호출되는 함수
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    // 선택된 이미지를 이미지 배열에 추가
    if (images.length + files.length <= 12) {
      setImages((prevImages) => [...prevImages, ...files]);
    } else {
      alert('이미지는 최대 12장까지만 업로드할 수 있습니다.');
    }
  };

  // 드래그 앤 드롭 이벤트를 처리하는 함수
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    // 드롭한 파일들을 이미지 배열에 추가
    if (images.length + files.length <= 12) {
      setImages((prevImages) => [...prevImages, ...files]);
    } else {
      alert('이미지는 최대 12장까지만 업로드할 수 있습니다.');
    }
  };

  // 드래그 오버 이벤트를 처리하여 기본 동작을 방지하는 함수
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // 파일 선택 창을 열기 위해 업로드 영역을 클릭할 때 호출되는 함수
  const handleUploadAreaClick = () => {
    fileInputRef.current.click();
  };

  // 게시물 작성이 완료될 때 호출되는 함수
  const handleSubmit = (event) => {
    event.preventDefault();
    // 게시물 객체를 생성
    const post = {
      title,
      content,
      images,
      thumbnail: images[0] // 첫 번째 이미지를 대표 이미지로 설정
    };
    // 부모 컴포넌트로 게시물 객체를 전달
    onPostSubmit(post);
  };

  return (
    <StyledContainer>
      <StyledPostBox>
        <StyledPostInput
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledUploadArea onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleUploadAreaClick}>
          {images.length === 0 && <CenteredText>여기에 파일을 드래그하거나 클릭하여 업로드</CenteredText>}
          {/* 보이지 않는 파일 입력 엘리먼트 */}
          <HiddenFileInput type="file" multiple ref={fileInputRef} onChange={handleImageChange} />
          {/* 이미지 미리보기 컨테이너 */}
          <ImagePreviewContainer>
            {images.map((image, index) => (
              <ImagePreview key={index} src={URL.createObjectURL(image)} alt={`preview ${index}`} />
            ))}
          </ImagePreviewContainer>
        </StyledUploadArea>
        <StyledPostContent
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <StyledPostBtn type="submit" onClick={handleSubmit}>
          작성 완료
        </StyledPostBtn>
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
