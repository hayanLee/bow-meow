import styled from 'styled-components';

import { baseGap, basePadding } from '../ProfileEditPage.styles/style-values';

export const StInputFields = styled.div`
  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: ${baseGap * 2}px;
  padding: ${basePadding}px;

  background-color: var(--box-color);
`;

export const StInputField = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: ${baseGap}px;

  font-size: 1.75em;
`;
