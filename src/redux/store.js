import { configureStore } from '@reduxjs/toolkit';
import { postImgReducer } from './slices/postImgReducer.slice';
import { postReducer } from './slices/postReducer.slice';
import { userReducer } from './slices/userReducer';

// 만약 다른 reducer를 추가한다면
const store = configureStore({
  reducer: { posts: postReducer, images: postImgReducer, user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
export default store;
