import styled from 'styled-components';
import { gap, padding } from './style-common-values';

const UpperSection = styled.section`
  height: 20%;

  display: flex;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: palegreen; //영역 구분용 컬러
`;

export default UpperSection;
