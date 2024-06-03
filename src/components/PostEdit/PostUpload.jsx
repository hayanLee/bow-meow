import React, { useRef } from 'react';
import { StyledUploadArea, HiddenFileInput } from './PostEditPage.styled';

// PostUpload 컴포넌트는 파일 업로드와 관련된 기능을 담당
const PostUpload = ({ onFileChange, onDrop, onDragOver, children }) => {
  // 파일 입력 엘리먼트를 참조하기 위한 useRef 훅을 사용
  const fileInputRef = useRef([]);

  // 파일 입력이 변경될 때 호출되는 함수
  const handleFileChange = (event) => {
    // 입력된 파일을 배열로 변환
    const files = Array.from(event.target.files);
    // onFileChange 콜백이 존재하면 호출
    if (onFileChange) {
      onFileChange(files);
    }
  };

  // 파일이 드롭될 때 호출되는 함수
  const handleDrop = (event) => {
    event.preventDefault(); // 기본 동작 방지
    // 드롭된 파일을 배열로 변환
    const files = Array.from(event.dataTransfer.files);
    // onDrop 콜백이 존재하면 호출
    if (onDrop) {
      onDrop(files);
    }
  };

  // 드래그 중인 파일이 업로드 영역을 지나갈 때 호출되는 함수
  const handleDragOver = (event) => {
    event.preventDefault(); // 기본 동작 방지
    // onDragOver 콜백이 존재하면 호출
    if (onDragOver) {
      onDragOver(event);
    }
  };

  // 업로드 영역이 클릭될 때 파일 입력 엘리먼트를 클릭하는 함수
  const handleUploadAreaClick = () => {
    fileInputRef.current.click();
  };

  return (
    // 업로드 영역 컴포넌트
    <StyledUploadArea onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleUploadAreaClick}>
      {children}
      {/* 숨겨진 파일 입력 엘리먼트 */}
      <HiddenFileInput type="file" multiple ref={fileInputRef} onChange={handleFileChange} />
    </StyledUploadArea>
  );
};

export default PostUpload;
