import { createSlice } from '@reduxjs/toolkit';
import { fetchAllGoods } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  goods: null,
  isLoading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState: { ...initialState },
  extraReducers: {
    [fetchAllGoods.pending]: handlePending,
    [fetchAllGoods.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.goods = action.payload;
    },
    [fetchAllGoods.rejected]: handleRejected,
  },
});

export const goodsReducer = goodsSlice.reducer;
