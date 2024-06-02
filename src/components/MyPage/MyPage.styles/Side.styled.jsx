import styled from 'styled-components';
import { padding } from './common-values';

const StSide = styled.nav`
  background-color: var(--box-color);
  height: 66%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: ${padding};
`;

export default StSide;
