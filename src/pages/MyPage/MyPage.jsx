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

//더미 데이터
const mockLoginedUser = {
  userId: 101,
  nickname: 'John',
  email: 'helloworld@naver.com',
  pwd: '123123123',
  profileImg: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png',
  introduce: '자기소개: 잘 부탁드려요 '
};

function MyPage() {
  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);
  const postList = useSelector((state) => state.posts.posts);

  const userWrittenPostList = useMemo(() => postList.filter((post) => post.userId === loginedUser.userId), [postList]);

  return (
    <StMain>
      <StUpperSection>
        <ProfileImg profileImg={loginedUser.profileImg} />
        <Summary userWrittenPostList={userWrittenPostList} />
        <StSideGroup>
          <CustomLink to={'/postAdd'}>글쓰기</CustomLink>
          <CustomLink to={'/myPage/profileEdit'}>회원정보 수정</CustomLink>
          <Button text="로그아웃" />
        </StSideGroup>
      </StUpperSection>
      <StLowerSection>
        <PostList userWrittenPostList={userWrittenPostList} />
      </StLowerSection>
    </StMain>
  );
}

export default MyPage;
