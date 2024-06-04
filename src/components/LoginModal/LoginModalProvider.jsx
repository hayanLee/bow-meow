import React, { createContext, useState } from 'react';
import LoginModal from './LoginModal';
export const LoginModalContext = createContext(null);

const LoginModalProvider = ({ children, navigate }) => {
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
      {showModal && <LoginModal navigate={navigate} />}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
