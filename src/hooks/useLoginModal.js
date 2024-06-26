import { useContext } from 'react';
import { LoginModalContext } from '../components/LoginModal/LoginModalProvider';

export const useLoginModal = () => {
  return useContext(LoginModalContext);
};
