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
  width: 80%;
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

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StyledPostInput = styled.input`
  width: 100%;
  padding: 1rem;
`;

export const StyledUploadArea = styled.div`
  width: 100%;
  height: 100%;
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

export const CenteredText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledPostContent = styled.textarea`
  width: 100%;
  height: 400px; /* 원하는 높이로 설정 */
  margin-top: 0.5rem;
  padding: 1rem;
`;

export const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  margin-top: 1rem; /* 위쪽 여백 */
`;

export const StyledPostBtn = styled.button`
  padding: 1rem;
  color: var(--text-color);
  background-color: var(--point-color);
  border: 1px solid var(--point-color);
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

