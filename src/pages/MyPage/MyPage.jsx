import React from 'react';
import styled from 'styled-components';
import Main from '../../components/MyPage/MyPage.styles/Main.styled';
import LeftSection from '../../components/MyPage/MyPage.styles/LeftSection.styled';

import RightSection from '../../components/MyPage/MyPage.styles/RightSection.styled';
import SummaryContainer from '../../components/MyPage/MyPage.styles/SummaryContainer.styled';
import PostContainer from '../../components/MyPage/MyPage.styles/PostContainer.styled';
import Post from './../../components/MyPage/MyPage.styles/Post.styled';

import Button from '../../components/MyPage/MyPage.styles/Button.styled';
import Label from './../../components/MyPage/MyPage.styles/Label.styled';

function MyPage() {
  return (
    <Main>
      <LeftSection>
        <div>
          <img src="" alt="" />
        </div>
        <nav>
          <Button>회원정보 수정</Button>
          <Button>회원탈퇴</Button>
        </nav>
      </LeftSection>
      <RightSection>
        <SummaryContainer>
          <Label> 작성한 게시물 수 </Label>
          <Label> 좋아요 수 </Label>
        </SummaryContainer>
        <div>
          <p> 작성한 게시글</p>
          <PostContainer>
            <Post>제목: 가나다 내용: 가나다라마바사 </Post>
            <Post>제목: 가나다 내용: 가나다라마바사 </Post>
          </PostContainer>
        </div>
      </RightSection>
    </Main>
  );
}

export default MyPage;
