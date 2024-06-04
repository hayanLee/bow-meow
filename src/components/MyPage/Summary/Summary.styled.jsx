import styled from 'styled-components';
//import { gap, padding } from './../common-values';
import { gap, padding } from '../MyPage.styles/style-common-values';

const StSummary = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  gap: ${gap}px;
  padding: ${padding}px;
`;

export default StSummary;
