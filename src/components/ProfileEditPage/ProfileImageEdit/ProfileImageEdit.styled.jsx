import styled from 'styled-components';

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;

  background-color: white;
`;

export const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StInput = styled.input`
  display: none;
`;

export const StSpan = styled.span`
  width: 250px;
  height: 50px;
  background-color: var(--point-color);
  color: var(--text-color);
  border: none;
  border-radius: 30px;
  font-size: 1.5rem;
  padding: 10px;
  text-align: center;
  margin: 10px;

  &:hover {
    filter: brightness(120%);
  }
`;
