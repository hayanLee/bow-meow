import styled from 'styled-components';
import { basePadding } from '../ProfileEditPage.styles/style-values';

export const StDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${basePadding}px;

  background-color: skyblue; //영역 구분용 컬러
`;

export const StImg = styled.img`
  width: 100%;

  border-radius: 100%;

  background-color: white;
`;
