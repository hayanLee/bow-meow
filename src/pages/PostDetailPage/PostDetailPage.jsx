import React from 'react';
import styled from 'styled-components';

function PostDetailPage() {
  return (
    <StyledDetailContainer>
      <StyledDetailLeft>
        <StyledDetailImg>이미지 영역입니다.</StyledDetailImg>
        <StyledDetailUser>회원 정보입니다.</StyledDetailUser>
      </StyledDetailLeft>
      <StyledDetailRight>
        <StyledDetailTitle>제목입니다.</StyledDetailTitle>
        <StyledDetailDate>날짜입니다.</StyledDetailDate>
        <StyledDetailPageContent>내용입니다.</StyledDetailPageContent>
      </StyledDetailRight>
    </StyledDetailContainer>
  );
}

export const StyledDetailContainer = styled.div`
  display: flex;
  width: 100%;
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
  margin-top: 1rem;
`;

export const StyledDetailUser = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  background-color: white;
  margin: 1rem 0.5rem;
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

export const StyledDetailTitle = styled.div`
  display: flex;
  background-color: white;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
`;

export const StyledDetailDate = styled.div`
  display: flex;
  background-color: white;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  color: gray;
`;

export const StyledDetailPageContent = styled.div`
  display: flex;
  background-color: white;
  margin: 1rem 0.5rem;
  padding: 1rem;
`;

export default PostDetailPage;
