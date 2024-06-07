import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem;
`;

export const StyledPostBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--box-color);
  border: 1px solid var(--box-color);
  border-radius: 5px;
  padding: 10px;
  gap: 2rem;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

// 이미지 크게 보는 모달창
export const StyledModalImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  max-width: 100%;
  max-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 이미지 박스 css
export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  align-items: center;
  width: 50%;
  border: 1px solid black;
  background-color: white;
`;

// 미리보기 부분
export const ImagePreviewContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  border: 2px dashed var(--point-color);
  text-align: center;
  cursor: pointer;
  background-color: var(--bg-color);
  color: var(--point-color);
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-right: 10px; /* 이미지와 버튼 사이의 간격 조절 */
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const DeleteButton = styled.button`
  padding: 0.3rem;
  color: #fff;
  background-color: gray;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 업로드 파일 선택하는 부분
export const StyledUploadArea = styled.div`
  width: 95%;
  height: 40%;
  padding: 1rem;
  margin: 1rem;
  border: 2px dashed var(--point-color);
  text-align: center;
  cursor: pointer;
  background-color: var(--bg-color);
  color: var(--point-color);
  align-items: center;
  justify-content: center;
`;

export const CenteredText = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

// 본문 css
export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  background-color: white;
  align-items: center;
`;

export const StyledPostInput = styled.input`
  width: 95%;
  margin: 0.5rem;
  padding: 1rem;
`;

export const StyledPostContent = styled.textarea`
  width: 95%;
  height: 400px;
  margin: 0.5rem;
  padding: 1rem;
`;

export const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const StyledPostBtn = styled.button`
  padding: 1rem;
  color: var(--text-color);
  background-color: var(--point-color);
  border: 1px solid var(--point-color);
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
`;
