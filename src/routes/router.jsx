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
import PostAddPage from '../pages/PostAddPage/PostAddPage';
import PostDetailPage from '../pages/PostDetailPage';
import PostList from '../pages/PostDetailPage/PostList';
import PostEditPage from '../pages/PostEditPage/PostEditPage';
import ProfileEditPage from '../pages/ProfileEditPage';
import SupabaseTestPage from '../pages/SupabaseTestPage';
import LoginModalProvider from '../components/LoginModal/LoginModalProvider';

const router = createBrowserRouter([
  {
    path: '/test',
    element: <SupabaseTestPage />
  },
  {
    element: (
      <LoginModalProvider>
        <Layout />
      </LoginModalProvider>
    ),

    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/myPage', element: <MyPage /> },
      { path: '/myPage/profileEdit', element: <ProfileEditPage /> },
      { path: '/posts', element: <PostDetailPage /> },
      { path: '/posts/:postId', element: <PostList /> },
      { path: '/postAdd', element: <PostAddPage /> },
      { path: '/posts/:postId/postEdit', element: <PostEditPage /> }
    ]
  },
  {
    element: (
      <LoginModalProvider>
        <AuthLayout />
      </LoginModalProvider>
    ),
    children: [
      { path: 'auth/logIn', element: <Login /> },
      { path: 'auth/signUp', element: <SignUp /> },
      { path: 'auth/searchID', element: <SearchId /> },
      { path: 'auth/searchPW', element: <SearchPw /> }
    ]
  }
]);

export default router;
