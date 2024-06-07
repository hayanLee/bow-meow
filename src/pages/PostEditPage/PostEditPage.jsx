import ImgUpdate from '../../components/PostEdit/ImgUpdate';

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
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//PostEditPage state

//SupaBase API
import { getImagesFromImages, getPost, upateNewPost } from './../../supabase/post';

// 여기도 이미지 관련된 부분은 무시하셔도 됩니다ㅠㅠ!!
function PostEditPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  //입력필드 상태
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //하위컴포넌트의 이미지를 가져오기 위한 ref
  const getImagesToUploadRef = useRef(null);

  //const [existingImages, setExistingImages] = useState([]);
  //const images = {};

  //const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const post = useSelector((state) => state.posts.posts.find((post) => post.postId === postId));
  //   const images = useSelector((state) => state.images.images);

  //페이지 로드시 한 번만 포스트 및 이미지 데이터 로드
  useEffect(() => {
    async function loadPost() {
      const post = await getPost(postId);
      const images = await getImagesFromImages([post]);
      const imageUrls = images.map((image) => image['img_url']);
      post.images = imageUrls;
      setPost(post);
    }

    loadPost();
  }, []);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      //setExistingImages(post.images || []);
    }
  }, [post]); // 게시물이 변경될 때 useEffect가 실행되도록 설정

  const handleSubmit = (event) => {
    event.preventDefault();
    //  if (!title || (existingImages.length === 0 && images.length === 0) || !content) {
    //    alert('칸을 모두 채워주세요!!');
    //    return;
    //  }

    const images = getImagesToUploadRef.current.get();

    const updatedPost = {
      ...post, // 기존 게시물 데이터 복사
      title, // 업데이트된 제목 설정
      content, // 업데이트된 내용 설정
      images
      //images: [...existingImages, ...images.map((image) => image.file)]
    };

    (async () => {
      await upateNewPost(updatedPost);
    })();

    // console.log('Updating post:', updatedPost); // 콘솔 로그 추가
    // updatedPost로 바꾸면됨
    //dispatch(updatePost({ postId, updatedData: updatedPost }));

    setTitle('');
    setContent('');

    //포스트 업로드 DB API
    // uploadImg(updatedPost, images);

    alert('성공적으로 수정되었습니다!');
    navigate('/myPage'); // 수정이 완료된 후에 수정완료된 게시물로 이동
  };

  if (!post) {
    return <p>포스트 로드 중</p>;
  }

  return (
    <StyledContainer>
      <StyledPostBox>
        <StyledContentContainer>
          <StyledLeftContainer>
            <ImgUpdate ref={getImagesToUploadRef} defaultImages={post.images} />
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
            수정 완료
          </StyledPostBtn>
        </StyledBtnContainer>
      </StyledPostBox>
    </StyledContainer>
  );
}

export default PostEditPage;
