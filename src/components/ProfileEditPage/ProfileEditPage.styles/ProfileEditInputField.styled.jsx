import styled from 'styled-components';
import { baseGap, basePadding } from './style-values';

const ProfileEditInputField = styled.div`
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: var(--box-color);
`;

export default ProfileEditInputField;
