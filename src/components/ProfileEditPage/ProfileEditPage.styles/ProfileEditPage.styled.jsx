import styled from 'styled-components';
import { baseGap, basePadding } from './style-values';

export const Main = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: green; //영역 구분용 컬러
`;

export const UpperSection = styled.section`
  width: 33%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${basePadding * 2}px;

  background-color: palegreen; //영역 구분용 컬러
`;

export const LowerSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: palevioletred; //영역 구분용 컬러
`;
