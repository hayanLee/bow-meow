import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auths/Login';
import SearchId from '../components/Auths/SearchId';
import SearchPw from '../components/Auths/SearchPw';
import SignUp from '../components/Auths/SignUp';
import AuthLayout from '../layout/AuthLayout';
import Layout from '../layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';
import PostDetailPage from '../pages/PostDetailPage';
import PostEditPage from '../pages/PostEditPage';
import ProfileEditPage from '../pages/ProfileEditPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/myPage', element: <MyPage /> },
      { path: '/myPage/profileEdit', element: <ProfileEditPage /> },
      { path: '/posts/:postId', element: <PostDetailPage /> },
      { path: '/posts/:postId/postEdit', element: <PostEditPage /> }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'logIn', element: <Login /> },
      { path: 'signUp', element: <SignUp /> },
      { path: 'searchID', element: <SearchId /> },
      { path: 'searchPW', element: <SearchPw /> }
    ]
  }
]);

export default router;
