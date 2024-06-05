import { SlArrowUpCircle } from 'react-icons/sl';
import styled from 'styled-components';

export const StUpIcon = styled(SlArrowUpCircle)`
  font-size: 2rem;
  cursor: pointer;
  opacity: 0;
  transition: 0.3s;
  visibility: hidden;
`;

// LoginModal style
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 300px;
  height: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--modal-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const ModalLoginBtn = styled.div`
  button {
    width: 180px;
    height: 40px;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: var(--bg-color);
  }
`;

export const ModalSginUpBtn = styled.div`
  button {
    width: 180px;
    height: 40px;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid #000;
    color: var(--bg-color);
  }
`;

// FilterContainer style
export const StFilter = styled.ul`
  display: flex;
  justify-content: right;
  font-size: 1.1rem;
  margin-right: 28px;
`;

export const NewListBtn = styled.li`
  cursor: pointer;
`;

export const LikeListBtn = styled.li`
  margin-left: 4px;
  cursor: pointer;
`;
