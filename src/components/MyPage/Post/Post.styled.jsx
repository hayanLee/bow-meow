import styled from 'styled-components';

export const StPost = styled.article`
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: 0%;

  background-color: var(--bg-color);
  border-radius: 30px;
  padding: 10px 10px;

  &:hover {
    filter: brightness(80%);
  }
`;

export const StSpan = styled.span`
  user-select: none;
`;
