import styled from 'styled-components';

import { baseGap, basePadding } from '../ProfileEditPage.styles/style-values';

const StInputFields = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: var(--box-color);
`;

export default StInputFields;
