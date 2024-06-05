import styled from 'styled-components';

export const StyledDetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

// 상단 우측 수정,삭제 버튼
export const StyledBtnContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-right: 4rem;
  float: right;
  align-items: center;
`;

export const StyledEditBtn = styled.button`
  padding: 0.5rem 1rem ;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #DACFC6; /* 수정 기능하다가 어떻게 하는건지 까먹었어요ㅜㅜㅜ */
  border: none;
`;

export const StyledDeleteBtn = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #A49384;
  border: none;
`;

//이미지, 회원정보
export const StyledDetailLeft = styled.div`
  width: 47%; /* 수정 */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDetailImg = styled.div`
  width: 90%;
  height: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const StyledDetailUser = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  background-color: white;
  margin-top: 1rem;
  padding: 1rem;
  align-items: center;
`;

// 제목,날짜,내용
export const StyledDetailRight = styled.div`
  width: 47%; /* 수정 */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-right: 2rem;
`;

export const StyledRightUp = styled.div`
  width: 90%;
  height: 15%;
  margin-top: 0.5rem;
`;

export const StyledDetailTitle = styled.div`
  height: 47%;
  display: flex;
  background-color: white;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

export const StyledDetailDate = styled.div`
  height: 50%;
  display: flex;
  background-color: white;
  padding: 0.5rem 1rem;
  color: gray;
`;

export const StyledDetailPageContent = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  background-color: white;
  padding: 1rem;
  overflow-y: auto;
  margin: 0.5rem 0 3rem 0;
`;
