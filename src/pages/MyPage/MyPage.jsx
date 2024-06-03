//순수 스타일용 컴포넌트
import Main from '../../components/MyPage/MyPage.styles/Main.styled';
import UpperSection from '../../components/MyPage/MyPage.styles/UpperSection.styled';
import LowerSection from '../../components/MyPage/MyPage.styles/LowerSection.styled';
import StSide from '../../components/MyPage/MyPage.styles/Side.styled';
import StLink from '../../components/MyPage/MyPage.styles/Link.styled';

//스타일된 기능용 컴포넌트
import StSummary from '../../components/MyPage/Summary/Summary.styled';
import StProfileImg from '../../components/MyPage/ProfileImg/ProfileImg.styled';
import StPostList from '../../components/MyPage/PostList/PostList.styled';

//공용 컴포넌트
import Button from './../../components/common/Button/Button';

//리액트 라이브러리
import { useState } from 'react';

//가짜 데이터
import { loadMockData } from '../../mockdatas/devutil';

const { mockUserList, mockPostList, mockLoginedUser } = loadMockData();

function MyPage() {
  const [userList, setUserList] = useState(mockUserList);
  const [postList, setPostList] = useState(mockPostList);
  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);

  return (
    <Main>
      <UpperSection>
        <StProfileImg profileImg={loginedUser.profileImg} />
        <StSummary />
        <Button>(임시)글쓰기</Button>
        <StLink to={'/myPage/profileEdit'}>회원정보 수정</StLink>
        <Button>(임시)로그아웃</Button>
      </UpperSection>
      <LowerSection>
        <StPostList />
      </LowerSection>
    </Main>
  );
}

export default MyPage;
