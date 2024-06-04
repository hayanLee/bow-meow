import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import styled, { keyframes } from "styled-components";
import {useLoginModal } from '../Hooks/loginModalHook'
import fetchPosts from '../mockdatas/postFn';
const ImageMasonry=  ()=> {
    const { open } = useLoginModal();
    const itemDatas = new Array(15).fill(null) // 스켈레톤 ui를 위한 더미 배열
    const [loading, setLoading] = useState(false); // 첫 페이지가 아닌 다음 무한스크롤 부터 해당 로딩이 적용됨
    const [firstLoading, setFirstLoading] = useState(false) // only for  첫 페이지 진입시 등장하는 스켈레톤을 위한 상태
    const [update, setUpdate] = useState(10); // 변경될 때마다 새로운 정보를 가져올 것
    const [itemTest, setItemTest] = useState([]);
    const columns = ['1/2', '2/3', '3/4']
    const rows = ['1/2', '1/3', '1/4', '2/7', '3/5', '4/7', '7/10', '5/10', '7/12', '10/14', '10/13', '12/16', '14/20', '13/20', '16/20']
  const fetchData = (setFunction) =>{
    setFunction(true);
    fetchPosts(update).then((data)=>{
      setFunction(false)
      setItemTest(data)
    }).catch((error)=>{
      setFunction(false)
      console.log(error)
    })
  }
    useEffect(()=>{
      fetchData(setLoading);
    },[update])
    useEffect(()=>{
      fetchData(setFirstLoading);
    },[])
  return (
    <Box sx={{ width: '100%', height: '100%', padding: '40px 20px', marginLeft: '13px' }}>
      {!firstLoading ?
      <Masonry columns={3} spacing={3}>
        {itemTest.map((item, index) => (
          <>
            <div key={index}>
              <img
                srcSet={`${item.images[0]}?w=162&auto=format&dpr=2 2x`}
                src={`${item.images[0]}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer'
                }}
                onClick={ open }
              />
            </div>
          </>
        ))}
      </Masonry>:
      <StMansonry>
        {
          itemDatas.map((value, index) => {
              return <>
                  <div key={index} className="coverItems" style={{ width: '100%', gridColumn: `${columns[index % 3]}`, gridRow: `${rows[index]}` }}>
                      <div className="item" />
                  </div>
              </>
          })
        }
      </StMansonry>
      }
      {loading && <>로딩중!</>}
    </Box>
  );
}
const pulseAnimation = keyframes`
        0% {
          background: rgba(237,237,237,0);
        }
        100% {
          background: #CECECE;
        }
`
const StMansonry = styled.div`
    display: grid;
    width : 100%;
    height : 1200px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(20,1fr);
    gap: 10px;
    .coverItems{
        width : 300px;
    }
    .item{
        height: 100%;
        animation: ${pulseAnimation} 0.5s alternate infinite;
    }
`;
export default ImageMasonry