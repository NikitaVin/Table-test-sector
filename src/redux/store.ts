import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import sortSlice from './slices/sort';
import searchSlice from './slices/search';
import postsSlice from './slices/posts';

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    search: searchSlice,
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
