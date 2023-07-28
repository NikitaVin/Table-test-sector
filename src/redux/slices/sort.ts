import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISort {
  sortByIdInc: boolean;
  sortByTitleInc: boolean;
  sortByBodyInc: boolean;
  sortByIdDec: boolean;
  sortByTitleDec: boolean;
  sortByBodyDec: boolean;
}

const initialState: ISort = {
  sortByIdInc: false,
  sortByTitleInc: false,
  sortByBodyInc: false,
  sortByIdDec: false,
  sortByTitleDec: false,
  sortByBodyDec: false,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortByIdInc: (state, action: PayloadAction<boolean>) => {
      state.sortByIdInc = action.payload;
    },
    setSortByTitleInc: (state, action: PayloadAction<boolean>) => {
      state.sortByTitleInc = action.payload;
    },
    setSortByBodyInc: (state, action: PayloadAction<boolean>) => {
      state.sortByBodyInc = action.payload;
    },
    setSortByIdDec: (state, action: PayloadAction<boolean>) => {
      state.sortByIdDec = action.payload;
    },
    setSortByTitleDec: (state, action: PayloadAction<boolean>) => {
      state.sortByTitleDec = action.payload;
    },
    setSortByBodyDec: (state, action: PayloadAction<boolean>) => {
      state.sortByBodyDec = action.payload;
    },
  },
});

export const selectorSort = ({ sort }: RootState) => sort;

export const {
  setSortByIdInc,
  setSortByTitleInc,
  setSortByBodyInc,
  setSortByIdDec,
  setSortByTitleDec,
  setSortByBodyDec,
} = sortSlice.actions;
export default sortSlice.reducer;
