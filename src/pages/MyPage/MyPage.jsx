//스타일된 기능용 컴포넌트
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

//가짜 데이터
import { loadMockData } from '../../mockdatas/devutil';

const { mockUserList, mockPostList, mockLoginedUser } = loadMockData();

function MyPage() {
  const [userList, setUserList] = useState(mockUserList);
  const [postList, setPostList] = useState(mockPostList);

  const [loginedUser, setLoginedUser] = useState(mockLoginedUser);

  const userWrittenPostList = useMemo(() => postList.filter((post) => post.userId === loginedUser.userId), [postList]);

  //issue: post에 comment 개수 직접 저장하기
  const { totalLiked, totalPosts, totalComments } = useMemo(
    () =>
      userWrittenPostList.reduce(
        ({ totalLiked, totalPosts, totalComments }, post) => {
          totalLiked += post.likeCount;
          totalPosts += 1;
          totalComments += 1000; //<<<<<<<<<<
          return { totalLiked, totalPosts, totalComments };
        },
        { totalLiked: 0, totalPosts: 0, totalComments: 0 }
      ),
    [postList]
  );

  return (
    <StMain>
      <StUpperSection>
        <ProfileImg profileImg={loginedUser.profileImg} />
        <Summary totalLiked={totalLiked} totalPosts={totalPosts} totalComments={totalComments} />
        <StSideGroup>
          <CustomLink to={'/임시링크'}>글쓰기</CustomLink>
          <CustomLink to={'/myPage/profileEdit'}>회원정보 수정</CustomLink>
          <Button text="로그아웃" />
        </StSideGroup>
      </StUpperSection>
      <StLowerSection>
        <PostList />
      </StLowerSection>
    </StMain>
  );
}

export default MyPage;
