//사용 컴포넌트
import Main from '../../components/MyPage/MyPage.styles/Main.styled';
import LeftSection from '../../components/MyPage/MyPage.styles/LeftSection.styled';
import RightSection from '../../components/MyPage/MyPage.styles/RightSection.styled';
import StProfileImg from '../../components/MyPage/MyPage.styles/ProfileImg.styled';
import StSummary from '../../components/MyPage/MyPage.styles/Summary.styled';
import StPostList from '../../components/MyPage/MyPage.styles/PostList.styled';
import StSide from '../../components/MyPage/MyPage.styles/Side.styled';
import StLink from '../../components/MyPage/MyPage.styles/Link.styled';
import Button from '../../components/MyPage/MyPage.styles/Button.styled';

//리액트 라이브러리
import { useState } from 'react';

//가짜 데이터
import { loadMyPageMockData } from '../../components/MyPage/devutil';

const { mockUserList, mockPostList, mockLoginedUser } = loadMyPageMockData();

function MyPage() {
  const [userList, setUserList] = useState(mockUserList);
  const [postList, setPostList] = useState(mockPostList);
  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);

  return (
    <Main>
      <LeftSection>
        <StProfileImg profileImg={loginedUser.profileImg} />
        <StSide>
          <StLink to={'/mypage/profileedit'}>회원정보 수정</StLink>
          <Button>회원탈퇴</Button>
        </StSide>
      </LeftSection>
      <RightSection>
        <StSummary />
        <StPostList />
      </RightSection>
    </Main>
  );
}

export default MyPage;
