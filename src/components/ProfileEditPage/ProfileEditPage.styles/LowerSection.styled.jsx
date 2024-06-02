import styled from 'styled-components';
import { baseGap, basePadding } from './style-values';

const LowerSection = styled.section`
  height: 50%;
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: palevioletred; //영역 구분용 컬러
`;

export default LowerSection;
