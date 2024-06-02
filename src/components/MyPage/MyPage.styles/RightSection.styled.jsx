import styled from 'styled-components';
import { gap, padding } from './common-values';

const RightSection = styled.section`
  width: 75%;

  display: flex;
  flex-direction: column;
  gap: ${gap};
  padding: ${padding};

  background-color: palevioletred; //영역 구분용 컬러
`;

export default RightSection;
