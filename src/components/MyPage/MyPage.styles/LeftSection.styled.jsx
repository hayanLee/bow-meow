import styled from 'styled-components';
import { gap, padding } from './style-common-values';

const LeftSection = styled.section`
  width: 25%;

  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: palegreen; //영역 구분용 컬러
`;

export default LeftSection;
