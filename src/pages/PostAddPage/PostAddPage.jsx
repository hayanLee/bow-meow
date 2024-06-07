import PostImg from '../../components/PostAdd/PostImgUpload/PostImg';

//스타일 컴포넌트
import {
  StyledBtnContainer,
  StyledContainer,
  StyledContentContainer,
  StyledLeftContainer,
  StyledPostBox,
  StyledPostBtn,
  StyledPostContent,
  StyledPostInput,
  StyledRightContainer
} from '../../components/PostAdd/PostAddPage.styled';

//react lib
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//SupaBase API
import { uploadImg } from '../../supabase/post';
import { getUser } from './../../supabase/auth.login';

//redux
import { clearImg } from '../../redux/slices/postImgReducer.slice';
import { createPost } from '../../redux/slices/postReducer.slice';

// 이미지, 제목, 내용 상태를 useState 훅을 통해 관리
function PostAddPage() {
  const [loginedUser, setLoginedUser] = useState(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const images = useSelector((state) => state.images.images);
  const files = useSelector((state) => state.images.files);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('loginedUser ↓');
  console.dir(loginedUser);

  // 페이지 로드 시에 로그인 유저 정보 한 번만 로드
  useEffect(() => {
    async function loadLoginedUser() {
      const loginedUser = await getUser();

      setLoginedUser({
        ...loginedUser.user,
        ...loginedUser.user.user_metadata
      });
    }

    loadLoginedUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || images.length === 0 || !content) {
      alert('칸을 모두 채워주세요!!');
      return;
    }

    const newPost = {
      userId: loginedUser.id,
      title,
      content,
      images: images.map((images) => URL.createObjectURL(images.file))
    };

    console.log('추가될 post', newPost); // 콘솔 로그 추가
    dispatch(createPost(newPost)); // 현재 로그인한 유저의 정보를 전역 상태로 하는 건가??

    //초기화 코드
    setTitle('');
    dispatch(clearImg());
    setContent('');

    alert('성공적으로 작성되었습니다!');

    uploadImg(newPost, files);

    navigate('/myPage'); // 작성이 완료된 후에 마이페이지로 이동
  };

  //로그인이 되지 않으면 리턴
  if (!loginedUser) {
    return <></>;
  }

  return (
    <StyledContainer>
      <StyledPostBox>
        <StyledContentContainer>
          <StyledLeftContainer>
            <PostImg />
          </StyledLeftContainer>
          <StyledRightContainer>
            <StyledPostInput
              type="text"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <StyledPostContent
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </StyledRightContainer>
        </StyledContentContainer>
        <StyledBtnContainer>
          <StyledPostBtn type="submit" onClick={handleSubmit}>
            작성 완료
          </StyledPostBtn>
        </StyledBtnContainer>
      </StyledPostBox>
    </StyledContainer>
  );
}

export default PostAddPage;
