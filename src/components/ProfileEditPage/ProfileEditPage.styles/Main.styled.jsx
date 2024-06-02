import styled from 'styled-components';
import { basePadding } from './style-values';

const Main = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0px;
  padding: ${basePadding}px;

  background-color: var(--bg-color); //배포 시 이 컬러를 사용
  background-color: green; //영역 구분용 컬러

  color: var(--text-color);
`;

export default Main;
