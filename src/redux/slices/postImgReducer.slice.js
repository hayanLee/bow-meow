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
        id: uuidv4(),
        type: 'new'
      }));
      state.images.push(...newImages);
    },
    addExistingImg: (state, action) => {
      const newImages = action.payload.map((url) => ({
        url,
        id: uuidv4(),
        type: 'existing'
      }));
      state.images.push(...newImages);
    },
    removeImg: (state, action) => {
      state.images = state.images.filter((image) => image.id !== action.payload);
    },
    clearImg: (state) => {
      state.images = [];
    },
    updatedImg: (state, action) => {
      const { id, newFile } = action.payload;
      const imageIndex = state.images.findIndex((image) => image.id === id);
      if (imageIndex !== -1) {
        state.images[imageIndex].file = newFile;
        state.images[imageIndex].type = 'new';
      }
    }
  }
});

export const postImgReducer = PostImgSlice.reducer;
export const { addImg, addExistingImg, removeImg, clearImg, updatedImg } = PostImgSlice.actions;
