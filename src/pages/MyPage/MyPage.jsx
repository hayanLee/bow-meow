import React from 'react';
import styled from 'styled-components';

const gap = '10px';
const padding = '10px';

//Todo: 크기 관련 이후 팀결정에 맞춰 수정
//  padding, gap 크기
//  화면 대비 높이 비율
//  브레이크 포인트
const Main = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  gap: ${gap};
  padding: ${padding};

  background-color: var(--bg-color);
  background-color: green; //개발용 컬러

  color: var(--text-color);
`;

const LeftSection = styled.section`
  width: 25%;

  display: flex;
  flex-direction: column;
  gap: ${gap};

  padding: ${padding};

  background-color: palegreen; //개발용 컬러

  //프로필 사진 영역
  & > div {
    height: 33%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: skyblue; //개발용 컬러
  }

  //회원정보 수정, 회원탈퇴 버튼 영역
  & > nav {
    background-color: var(--box-color);
    height: 66%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: ${padding};
  }
`;

const RightSection = styled.section`
  width: 75%;

  display: flex;
  flex-direction: column;
  gap: ${gap};
  padding: ${padding};

  background-color: palevioletred; //개발용 컬러

  & > div {
    background-color: var(--box-color);
  }

  & > div:nth-child(2) {
    height: 85%;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${gap};
  padding: ${padding};
  height: 15%;

  & > Label {
    width: 33%;
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${gap};
  padding: ${padding};
  height: 15%;
`;

/* 
    --bg-color: #fffef5;
    --header-color: #bc6c25;
    --box-color: #dda15e;
    --point-color: #606c38;
    --button-color: #283618;
    --text-color: #fefae0;
*/

const Post = styled.article`
  background-color: var(--bg-color);
  color: black;
  border-radius: 30px;
  padding: 0px 10px;
`;

//공용컴포넌트 Button이 만들어지지 않아서
//임시로 만들어 썼습니다
const Button = styled.button`
  background-color: var(--point-color);
  color: var(--text-color);

  border-radius: 30px;
`;

const Label = styled.label`
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--point-color);
  color: var(--text-color);
`;

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
