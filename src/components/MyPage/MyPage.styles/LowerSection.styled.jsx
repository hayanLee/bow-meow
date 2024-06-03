import styled from 'styled-components';
import { gap, padding } from './style-common-values';

const LowerSection = styled.section`
  height: 80%;

  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: palevioletred; //영역 구분용 컬러
`;

export default LowerSection;
