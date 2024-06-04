import { HiArrowUpCircle } from 'react-icons/hi2';
import styled from 'styled-components';

export const StUpIcon = styled(HiArrowUpCircle)`
  width: 50px;
  height: 50px;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0;
  transition: 0.3s;
  visibility: hidden;
  display: block;
  position: fixed;
  bottom: 95px;
  right: 70px;
  visibility: visible;
  opacity: 1;
  border-radius: 50px;
  color: var(--button-color);
  &:hover {
    color: var(--point-color);
  }
`;
