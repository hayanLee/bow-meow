import styled from 'styled-components';
import InputFields from './InputFields';

import { baseGap, basePadding } from '../ProfileEditPage.styles/style-values';

const StInputFields = styled(InputFields)`
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: var(--box-color);
`;

export default StInputFields;
