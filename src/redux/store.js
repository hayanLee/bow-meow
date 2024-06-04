import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './slices/postReducer.slice';

// 만약 다른 reducer를 추가한다면
const store = configureStore({
  reducer: { posts: postReducer }
});
export default store;
