import React, { createContext, useState } from 'react';
import LoginModal from './LoginModal';
export const LoginModalContext = createContext(null);

const LoginModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const value = {
    open: () => {
      setShowModal(true);
    },
    close: () => {
      setShowModal(false);
    }
  };

  return (
    <LoginModalContext.Provider value={value}>
      {children}
      {showModal && <LoginModal />}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
