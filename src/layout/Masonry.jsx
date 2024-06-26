/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useLoginModal } from '../hooks/useLoginModal';
import { getUser } from '../supabase/auth.login';
import { getImageIdsFromTable, getImagesFromImages } from '../supabase/post';
const ImageMasonry = () => {
  const { open } = useLoginModal();
  const itemDatas = new Array(15).fill(null); // 스켈레톤 ui를 위한 더미 배열
  const [loading, setLoading] = useState(false); // 첫 페이지가 아닌 다음 무한스크롤 부터 해당 로딩이 적용됨
  const [firstLoading, setFirstLoading] = useState(false); // only for  첫 페이지 진입시 등장하는 스켈레톤을 위한 상태
  const [itemTest, setItemTest] = useState([]);
  const columns = ['1/2', '2/3', '3/4'];
  const rows = [
    '1/2',
    '1/3',
    '1/4',
    '2/7',
    '3/5',
    '4/7',
    '7/10',
    '5/10',
    '7/12',
    '10/14',
    '10/13',
    '12/16',
    '14/20',
    '13/20',
    '16/20'
  ];
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      console.log(user, user !== null, '<<<<<<');
      setIsLogin(user.user !== null);
    };

    fetchUser();
  }, []);

  const navigate = useNavigate();
  const imageHandler = (e) => {
    const postId = e.target.id;
    if (!isLogin) {
      open();
    } else {
      navigate(`/posts/${postId}`);
    }
  };

  const fetchData = async () => {
    setFirstLoading(true); // 데이터 불러오기 시작
    const imageIds = await getImageIdsFromTable();
    const posts = await getImagesFromImages(imageIds);
    setItemTest(posts);
    setFirstLoading(false); // 데이터 로드 완료
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(itemTest);
  }, [itemTest]);

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '40px 20px', marginLeft: '13px' }}>
      {!firstLoading ? (
        <Masonry columns={3} spacing={3}>
          {itemTest.map((item, index) => (
            <div key={item.post_id}>
              <img
                id={item.post_id}
                srcSet={`${item.img_url}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img_url}?w=162&auto=format`}
                alt={`${item.id}번째 이미지`}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer'
                }}
                onClick={imageHandler}
              />
            </div>
          ))}
        </Masonry>
      ) : (
        <StMasonry>
          {itemDatas.map((value, index) => {
            return (
              <div
                key={index}
                className="coverItems"
                style={{ width: '100%', gridColumn: `${columns[index % 3]}`, gridRow: `${rows[index]}` }}
              >
                <div className="item" />
              </div>
            );
          })}
        </StMasonry>
      )}
      {loading && <>로딩중!</>}
    </Box>
  );
};

const pulseAnimation = keyframes`
        0% {
          background: rgba(237,237,237,0);
        }
        100% {
          background: #CECECE;
        }
`;

const StMasonry = styled.div`
  display: grid;
  width: 100%;
  height: 1200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 10px;
  .coverItems {
    width: 300px;
  }
  .item {
    height: 100%;
    animation: ${pulseAnimation} 0.5s alternate infinite;
  }
`;

export default ImageMasonry;
