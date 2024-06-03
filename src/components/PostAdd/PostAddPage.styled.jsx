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
  display: inline-block; /* 이미지와 버튼을 인라인 레벨로 표시 */
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
