import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyled/GlobalStyled';
import router from './routes/router';
import LoginModalProvider from './components/LoginModal/LoginModalProvider';

function App() {
  return (
    <>
      <LoginModalProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </LoginModalProvider>
    </>
  );
}

export default App;
