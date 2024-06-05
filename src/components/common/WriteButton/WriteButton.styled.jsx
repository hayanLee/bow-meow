import styled from 'styled-components';
import { BiSolidPencil } from 'react-icons/bi';

export const StWriteIcon = styled(BiSolidPencil)`
  width: 40px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 74px;
  border-radius: 50px;
  color: var(--bg-color);
  background-color: var(--write-color);
  padding: 8px;
  transition: 0.3s;
  &:hover {
    background-color: var(--button-color);
  }
`;
