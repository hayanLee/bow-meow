//스타일된 기능용 컴포넌트
import ProfileImg from '../../components/MyPage/ProfileImg';
import PostList from '../../components/MyPage/PostList';
import Summary from './../../components/MyPage/Summary';

//스타일용 컴포넌트
import { StMain, StUpperSection, StLowerSection, StLink } from '../../components/MyPage/MyPage.styles/MyPage.styled';

//공용 컴포넌트
import Button from './../../components/common/Button';

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
    <StMain>
      <StUpperSection>
        <ProfileImg profileImg={loginedUser.profileImg} />
        <Summary />
        <div>
          <Button text="글쓰기" />
          <StLink to={'/myPage/profileEdit'}>회원정보 수정</StLink>
          <Button text="로그아웃" />
        </div>
      </StUpperSection>
      <StLowerSection>
        <PostList />
      </StLowerSection>
    </StMain>
  );
}

export default MyPage;
