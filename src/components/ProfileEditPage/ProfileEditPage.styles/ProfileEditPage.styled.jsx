import styled from 'styled-components';
import { baseGap, basePadding } from './style-values';

export const Main = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0px;
  padding: ${basePadding}px;

  background-color: var(--bg-color); //배포 시 이 컬러를 사용
  background-color: green; //영역 구분용 컬러

  color: var(--text-color);
`;

export const UpperSection = styled.section`
  height: 40%;
  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${basePadding * 2}px;

  background-color: palegreen; //영역 구분용 컬러

  //프로필 사진 영역
  & > div {
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${basePadding}px;

    background-color: skyblue; //영역 구분용 컬러

    border-radius: 100%;
  }

  & img {
    aspect-ratio: 1/1;
  }
`;

export const LowerSection = styled.section`
  height: 60%;
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: palevioletred; //영역 구분용 컬러
`;
