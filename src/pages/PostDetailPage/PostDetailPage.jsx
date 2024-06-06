import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

function PostDetailPage() {
  const { postId } = useParams(); //URL 매개변수에서 postId 가져오기
  const posts = useSelector((state) => state.posts.posts); // Redux store에서 모든 게시물 가져옴
  const post = posts.find((s) => s.postId.toString() === postId); // URL의 postId와 일치하는 게시물 찾음

  return (
    <>
      <PostDetailBtn postId={postId} /> {/* 수정 및 삭제 버튼이 있는 컴포넌트 렌더링 */}
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
          <StyledDetailUser>User ID: {post.userId}</StyledDetailUser>
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
