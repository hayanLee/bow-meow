import styled from 'styled-components';

export const StyledDetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
`;

// 상단 우측 수정,삭제 버튼
export const StyledBtnContainer = styled.div`
  display: flex;
  margin: 1rem;
  position: fixed;
`;

export const StyledEditBtn = styled.button`
  height: 3rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const StyledDeleteBtn = styled.button`
  height: 3rem;
  padding: 0.5rem;
  cursor: pointer;
`;

//이미지, 회원정보
export const StyledDetailLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 1rem;
  background-color: yellow;
`;

export const StyledDetailImg = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  background-color: white;
  margin: 1rem;
  justify-content: center;
`;

export const StyledDetailUser = styled.div`
  height: 30%;
  display: flex;
  background-color: white;
  margin: 0.5rem 1rem 1rem 1rem;
  padding: 1rem;
  align-items: center;
`;

// 제목,날짜,내용
export const StyledDetailRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 1rem;
  background-color: yellow;
`;

export const StyledRightUp = styled.div`
  height: 20%;
  margin: 1rem 1rem 0 1rem;
`;

export const StyledDetailTitle = styled.div`
  height: 50%;
  display: flex;
  background-color: white;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const StyledDetailDate = styled.div`
  height: 50%;
  display: flex;
  background-color: white;
  padding: 0.5rem 1rem;
  color: gray;
`;

export const StyledDetailPageContent = styled.div`
  height: 80%;
  display: flex;
  background-color: white;
  padding: 1rem;
  margin: 0 1rem 1rem 1rem;
`;
