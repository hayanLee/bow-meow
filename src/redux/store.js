import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './slices/postReducer.slice';
import { postImgReducer } from './slices/postImgReducer';

// 만약 다른 reducer를 추가한다면
const store = configureStore({
  reducer: { posts: postReducer, images: postImgReducer },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
