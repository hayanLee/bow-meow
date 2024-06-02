import styled from 'styled-components';
import { gap, padding } from './common-values';

import Summary from '../Summary';

const StSummary = styled(Summary)`
  height: 15%;

  display: flex;
  justify-content: space-around;
  gap: ${gap};
  padding: ${padding};

  background-color: var(--box-color);

  & > Label {
    width: 33%;
  }
`;

export default StSummary;
