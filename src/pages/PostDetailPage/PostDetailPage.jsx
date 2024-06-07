// 스와이퍼 관련
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StyledDetailContainer,
  StyledDetailDate,
  StyledDetailImg,
  StyledDetailLeft,
  StyledDetailPageContent,
  StyledDetailRight,
  StyledDetailTitle,
  StyledDetailUser,
  StyledRightUp
} from '../../components/PostDetail/PostDetail.styled';
import PostDetailBtn from '../../components/PostDetail/PostDetailBtn.jsx/PostDetailBtn';

//react lib
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//SupaBase API
import { ProfileImg } from '../../components/Header/Header.styled';
import { getUserRow } from '../../supabase/profile';
import { getPost } from './../../supabase/post';
import { getPostImages } from './../../supabase/post';

function PostDetailPage() {
  const { postId } = useParams(); //URL 매개변수에서 postId 가져오기
  const [post, setPost] = useState(null);
  const [userInfo, setUserInfo] = useState();
  //Redux store에서 모든 게시물 가져옴
  //const posts = useSelector((state) => state.posts.posts);

  //페이지 로드시 한 번만
  //DB에서 포스트를 불러옴
  useEffect(() => {
    async function loadPosts() {
      const post = await getPost(postId);
      const userInfo = await getUserRow();
      setUserInfo(userInfo);

      const images = await getPostImages(post.id);
      const imageUrls = [];
      for (const image of images) {
        if (image) {
          imageUrls.push(image.img_url);
        }
      }

      post.images = imageUrls;
      setPost(post);
    }

    loadPosts();
  }, []);

  //아직 포스트가 로딩되지 않은 경우
  //Todo: 스켈레톤 UI 적용?
  if (!post) {
    return <>포스트 로딩 중</>;
  }

  return (
    <>
      <PostDetailBtn postId={postId} />
      {/* 수정 및 삭제 버튼이 있는 컴포넌트 렌더링
		  Todo: 로그인된 유저 id === 포스트.작성유저 id => 렌더링
		*/}
      <StyledDetailContainer>
        <StyledDetailLeft>
          <StyledDetailImg>
            {post.images && post.images.length > 0 ? ( // 게시물에 이미지가 있는지 확인
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={50}
                slidesPerView={1}
              >
                {post.images.map(
                  (
                    image,
                    index // 게시물의 이미지를 순회하며 SwiperSlide 렌더링
                  ) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`Post Image ${index}`} /> {/* 이미지 렌더링 */}
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            ) : (
              <div>이미지가 없습니다</div>
            )}
          </StyledDetailImg>

          <StyledDetailUser>
            <ProfileImg src={userInfo.profile_img} /> {userInfo.nickname}
          </StyledDetailUser>
        </StyledDetailLeft>
        <StyledDetailRight>
          <StyledRightUp>
            <StyledDetailTitle>{post.title}</StyledDetailTitle>
            <StyledDetailDate>{post.createdAt}</StyledDetailDate>
          </StyledRightUp>
          <StyledDetailPageContent>{post.content}</StyledDetailPageContent>
        </StyledDetailRight>
      </StyledDetailContainer>
    </>
  );
}
export default PostDetailPage;