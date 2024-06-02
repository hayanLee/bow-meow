import styled from 'styled-components';
import { gap, padding } from './common-values';

import Summary from '../Summary';

const StSummary = styled(Summary)`
  display: flex;
  justify-content: space-around;
  gap: ${gap};
  padding: ${padding};
  height: 15%;

  & > Label {
    width: 33%;
  }
`;

export default StSummary;
