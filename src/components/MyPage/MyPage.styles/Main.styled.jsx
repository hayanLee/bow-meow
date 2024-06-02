import styled from 'styled-components';
import { gap, padding } from './common-values';

const Main = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: center;
  gap: ${gap};
  padding: ${padding};

  background-color: var(--bg-color);
  background-color: green; //영역 구분용 컬러
  color: var(--text-color);
`;

export default Main;
