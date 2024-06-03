import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StLink = styled(Link)`
  width: 250px;
  height: 50px;
  background-color: var(--point-color);
  color: var(--text-color);
  border-radius: 30px;
  font-size: 1.5rem;
  padding: 10px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;

  &:hover {
    filter: brightness(120%);
  }
`;
