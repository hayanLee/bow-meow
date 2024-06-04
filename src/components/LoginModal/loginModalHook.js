import { useContext } from 'react';
import { LoginModalContext } from './LoginModalProvider';

export const useLoginModal = () => {
  return useContext(LoginModalContext);
};
