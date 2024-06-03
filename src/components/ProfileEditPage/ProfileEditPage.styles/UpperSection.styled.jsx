import styled from 'styled-components';
import { basePadding } from './style-values';

const UpperSection = styled.section`
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

export default UpperSection;
