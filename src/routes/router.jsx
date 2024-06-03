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
import PostList from '../pages/PostDetailPage/PostList';
import PostEditPage from '../pages/PostEditPage/PostEditPage';
import ProfileEditPage from '../pages/ProfileEditPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/myPage', element: <MyPage /> },
      { path: '/myPage/profileEdit', element: <ProfileEditPage /> },
      { path: '/posts/post/:id', element: <PostDetailPage /> },
      { index: '/posts/:postId', element: <PostList /> },
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
