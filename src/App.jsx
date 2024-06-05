import { RouterProvider, useNavigate } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyled/GlobalStyled';
import router from './routes/router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
