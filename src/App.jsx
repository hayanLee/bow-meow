import { RouterProvider, useNavigate } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyled/GlobalStyled';
import router from './routes/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
