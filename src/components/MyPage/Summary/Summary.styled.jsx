import styled from 'styled-components';
//import { gap, padding } from './../common-values';
import Summary from './Summary';
import { gap, padding } from '../MyPage.styles/style-common-values';

const StSummary = styled(Summary)`
  height: 15%;

  display: flex;
  justify-content: space-around;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: var(--box-color);

  & > Label {
    width: 33%;
  }
`;

export default StSummary;
