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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//SupaBase API
import { signOut, getUser } from './../../supabase/auth.login';
import { getPetsOfUserImage } from '../../supabase/post';

function MyPage() {
  const [loginedUser, setLoginedUser] = useState(null);
  const [userPostList, setUserPostList] = useState(null);

  const navigate = useNavigate();

  function handleLogoutButtonClick() {
    signOut(); //SupaBase API

    alert('로그아웃되었습니다.');
    navigate('/');
  }

  useEffect(() => {
    //현재 로그인된 유저 정보와
    //현재 로그인된 유저가 작성한 포스트를 로드
    async function loadUserAndPosts() {
      const loadedUserData = await getUser(); //SupaBase API
      const loginedUser = {
        ...loadedUserData.user,
        ...loadedUserData.user.user_metadata
      };

      setLoginedUser(loginedUser);

      console.log('loginedUser ↓');
      console.dir(loginedUser);
      const userPostList = await getPetsOfUserImage(loginedUser.id); //SupaBase API

      setUserPostList(userPostList);
      console.log('userPostList ↓');
      console.dir(userPostList);
    }

    loadUserAndPosts();
  }, []);

  //로그인이 되지 않으면 리턴
  if (!loginedUser) {
    return <p>로그인을 해주세요!</p>;
  }

  //포스트가 로드되지 않았으면 리턴
  if (!userPostList) {
    return <p>포스트 로드 중</p>;
  }

  return (
    <StMain>
      <StUpperSection>
        <ProfileImg profileImg={loginedUser.profileImg} />
        <Summary userPostList={userPostList} />
        <StSideGroup>
          <CustomLink to={'/postAdd'}>글쓰기</CustomLink>
          <CustomLink to={'/myPage/profileEdit'}>회원정보 수정</CustomLink>
          <Button onClick={handleLogoutButtonClick} text="로그아웃" />
        </StSideGroup>
      </StUpperSection>
      <StLowerSection>
        <PostList userPostList={userPostList} />
      </StLowerSection>
    </StMain>
  );
}

export default MyPage;
