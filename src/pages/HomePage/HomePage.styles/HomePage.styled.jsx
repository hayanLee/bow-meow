import { SlArrowUpCircle } from 'react-icons/sl';
import styled from 'styled-components';

export const StUpIcon = styled(SlArrowUpCircle)`
  font-size: 2rem;
  cursor: pointer;
  opacity: 0;
  transition: 0.3s;
  visibility: hidden;
  &.active {
    display: block;
    position: fixed;
    bottom: 50px;
    right: 50px;
    visibility: visible;
    opacity: 1;
  }
`;
