import styled from 'styled-components';
import { gap, padding } from './common-values';

const LeftSection = styled.section`
  width: 25%;

  display: flex;
  flex-direction: column;
  gap: ${gap};
  padding: ${padding};

  background-color: palegreen; //영역 구분용 컬러
`;

export default LeftSection;
