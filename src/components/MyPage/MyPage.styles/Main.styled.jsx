import styled from 'styled-components';
import { gap, padding } from './style-common-values';

const Main = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  padding: ${padding}px;

  background-color: var(--bg-color);
  background-color: green; //영역 구분용 컬러
  color: var(--text-color);
`;

export default Main;
