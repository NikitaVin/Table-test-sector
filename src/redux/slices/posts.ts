import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { RootState } from '../store';

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostsSliceState {
  items: IPosts[];
  status: string;
}

const initialState: IPostsSliceState = {
  items: [],
  status: 'loading',
};

export const getAsyncPostsByParams = createAsyncThunk<IPosts[]>(
  'posts/getAsyncPostsByParams',
  async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncPostsByParams.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getAsyncPostsByParams.fulfilled, (state, action) => {
      const redactingPosts = [...action.payload];
      const redactedPosts = [];
      const the1thID = redactingPosts.splice(0, 10);
      const the2thID = redactingPosts.splice(0, 10);
      const the3thID = redactingPosts.splice(0, 10);
      const the4thID = redactingPosts.splice(0, 10);
      const the5thID = redactingPosts.splice(0, 10);
      const the6thID = redactingPosts.splice(0, 10);
      const the7thID = redactingPosts.splice(0, 10);
      const the8thID = redactingPosts.splice(0, 10);
      const the9thID = redactingPosts.splice(0, 10);
      const the10thID = redactingPosts.splice(0, 10);
      for (let i = 0; i < the1thID.length; i++) {
        redactedPosts.push(
          the1thID[i],
          the2thID[i],
          the3thID[i],
          the4thID[i],
          the5thID[i],
          the6thID[i],
          the7thID[i],
          the8thID[i],
          the9thID[i],
          the10thID[i]
        );
      }
      state.items = redactedPosts;
      state.status = 'loaded';
    });

    builder.addCase(getAsyncPostsByParams.rejected, (state) => {
      console.log('err', state);
      alert('Произошла ошибка, попробуйте обновить страницу');
      state.status = 'loaded';
    });
  },
});

export const postssSelector = (state: RootState) => state.posts;

export default postsSlice.reducer;
