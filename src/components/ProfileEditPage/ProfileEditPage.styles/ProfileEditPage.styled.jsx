import styled from 'styled-components';
import { baseGap, basePadding } from './style-values';

export const Main = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${baseGap * 5}px;
  padding: ${basePadding * 5}px 0px;
`;

export const UpperSection = styled.section`
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LowerSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${baseGap}px;
`;
