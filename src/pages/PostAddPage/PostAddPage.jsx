import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  StyledContainer,
  StyledPostBox,
  StyledPostInput,
  StyledPostContent,
  StyledPostBtn,
  StyledRightContainer,
  StyledBtnContainer,
  StyledContentContainer,
  StyledLeftContainer
} from '../../components/PostAdd/PostAddPage.styled';
import PostImg from '../../components/PostAdd/PostImgUpload/PostImg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../redux/slices/postReducer.slice';
import { clearImg } from '../../redux/slices/postImgReducer.slice';

const mockLoginedUser = {
  userId: 101,
  nickname: 'John',
  email: 'helloworld@naver.com',
  pwd: '123123123',
  profileImg: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employee-icon.png',
  introduce: '자기소개: 잘 부탁드려요 '
};

function PostAddPage() {
  // 이미지, 제목, 내용 상태를 useState 훅을 통해 관리
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const images = useSelector((state) => state.images.images);
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || images.length === 0 || !content) {
      alert('칸을 모두 채워주세요!!');
      return;
    }

    const newPost = {
      userId: mockLoginedUser.userId,
      title,
      content,
      images: images.map((images) => URL.createObjectURL(images.file)),
      files: images
    };

    console.log('Submitting post:', newPost); // 콘솔 로그 추가
    dispatch(createPost(newPost));
    setTitle('');
    dispatch(clearImg());
    setContent('');

    alert('성공적으로 작성되었습니다!');
    navigate('/myPage'); // 작성이 완료된 후에 마이페이지로 이동
  };
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
