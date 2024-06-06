//기능용 컴포넌트
import ProfileImg from '../../components/MyPage/ProfileImg';
import PostList from '../../components/MyPage/PostList';
import Summary from './../../components/MyPage/Summary';

//스타일용 컴포넌트
import {
  StMain,
  StUpperSection,
  StLowerSection,
  StSideGroup
} from '../../components/MyPage/MyPage.styles/MyPage.styled';

//공용 컴포넌트
import Button from './../../components/common/Button';
import CustomLink from './../../components/common/CustomLink';

//리액트 라이브러리
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//SupaBase API
import { signOut } from './../../supabase/auth.login';

//더미 데이터
const mockLoginedUser = {
  userId: 101
};

//To-be: DB API 사용해서 현재 로그인된 유저 정보 가져오기
function getLoginedUserData(loginedUserId) {
  const users = useSelector((state) => state.users.users);

  const loginedUser = users.find((user) => user.userId === loginedUserId);

  return loginedUser;
}

function MyPage() {
  const [loginedUser, setLoginedUser] = useState(getLoginedUserData(mockLoginedUser.userId));

  const navigate = useNavigate();

  const postList = useSelector((state) => state.posts.posts);

  const userWrittenPostList = useMemo(() => postList.filter((post) => post.userId === loginedUser.userId), [postList]);

  function handleLogoutButtonClick() {
    //SupaBase API
    signOut();

    alert('로그아웃되었습니다.');
    navigate('/');
  }

  return (
    <StMain>
      <StUpperSection>
        <ProfileImg profileImg={loginedUser.profileImg} />
        <Summary userWrittenPostList={userWrittenPostList} />
        <StSideGroup>
          <CustomLink to={'/postAdd'}>글쓰기</CustomLink>
          <CustomLink to={'/myPage/profileEdit'}>회원정보 수정</CustomLink>
          <Button onClick={handleLogoutButtonClick} text="로그아웃" />
        </StSideGroup>
      </StUpperSection>
      <StLowerSection>
        <PostList userWrittenPostList={userWrittenPostList} />
      </StLowerSection>
    </StMain>
  );
}

export default MyPage;
