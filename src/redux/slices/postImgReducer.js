import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  images: []
};

const PostImgSlice = createSlice({
  initialState,
  name: 'PostImg',
  reducers: {
    addImg: (state, action) => {
      const newImages = action.payload.map((file) => ({
        file,
        id: uuidv4()
      }));
      state.images.push(...newImages);
    },
    removeImg: (state, action) => {
      state.images = state.images.filter((image) => image.id !== action.payload);
    },
    clearImg: (state) => {
      state.images = [];
    }
  }
});
export const postImgReducer = PostImgSlice.reducer;
export const { addImg, removeImg, clearImg } = PostImgSlice.actions;
