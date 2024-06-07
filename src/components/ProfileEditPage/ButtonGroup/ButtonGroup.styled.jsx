import styled from 'styled-components';

export const StButtonGroup = styled.div`
  width: 600px;

  display: flex;
  align-items: center;

  & > div {
    display: inline-block;
  }

  & button {
    width: fit-content;
  }
`;

export const StLeftGroup = styled.div`
  margin: 0px auto 0px 0px;

  & > button {
    background-color: #dedddc;
    color: white;
    font-size: 1em;
  }
`;

export const StRightGroup = styled.div`
  margin: 0px 0px auto 0px;
`;
