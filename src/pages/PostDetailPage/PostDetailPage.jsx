import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// 스와이퍼 관련
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
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
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((s) => s.postId.toString() === postId);

  return (
    <>
      <PostDetailBtn postId={postId}/>
      <StyledDetailContainer>
        <StyledDetailLeft>
          <StyledDetailImg>
            {post.images && post.images.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={50}
                slidesPerView={1}
              >
                {post.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`Post Image ${index}`} />
                  </SwiperSlide>
                ))}
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
