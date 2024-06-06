//기능용 컴포넌트
import PostList from '../../components/MyPage/PostList';
import ProfileImg from '../../components/MyPage/ProfileImg';
import Summary from './../../components/MyPage/Summary';

//스타일용 컴포넌트
import {
  StLowerSection,
  StMain,
  StSideGroup,
  StUpperSection
} from '../../components/MyPage/MyPage.styles/MyPage.styled';

//공용 컴포넌트
import Button from './../../components/common/Button';
import CustomLink from './../../components/common/CustomLink';

//리액트 라이브러리
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//SupaBase API
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/slices/userReducer';
import { getImagesFromImages, getPetsOfUserImage } from '../../supabase/post';
import { getUser, signOut } from './../../supabase/auth.login';

function MyPage() {
  const [loginedUser, setLoginedUser] = useState(null);
  const [userPostList, setUserPostList] = useState(null);

  const dispatch = useDispatch();
  const { profileImg } = useSelector((state) => state.user);

  const navigate = useNavigate();

  function handleLogoutButtonClick() {
    signOut(); //SupaBase API
    dispatch(clearUser());
    alert('로그아웃되었습니다.');
    navigate('/');
  }

  useEffect(() => {
    //현재 로그인된 유저 정보와
    //현재 로그인된 유저가 작성한 포스트를 DB에서 로드
    async function loadUserAndPosts() {
      const loadedUserData = await getUser();
      const loginedUser = {
        ...loadedUserData.user
      };

      setLoginedUser(loginedUser);

      console.log('loginedUser ↓');
      console.dir(loginedUser);

      const userPostList = await getPetsOfUserImage(loginedUser.id);
      const postImages = await getImagesFromImages(userPostList);

      for (const post of userPostList) {
        const postImgIdx = postImages.findIndex((postImage) => {
          if (post && postImage) {
            return post.id === postImage.post_id;
          }
          return false;
        });

        if (postImgIdx !== -1) {
          post.image = postImages[postImgIdx].img_url;
        }
      }

      setUserPostList(userPostList);

      /* post shape
        user_id, (post)id, title, created_at, content
      */
      /* image shape
        (img)id, post_id, created_at, img_url, 
      */
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
        <ProfileImg profileImg={profileImg} />
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
