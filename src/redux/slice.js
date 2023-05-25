import { createSlice } from '@reduxjs/toolkit';
import { fetchAllGoods, submitOrder } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  goods: null,
  orders: null,
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
    [submitOrder.pending]: handlePending,
    [submitOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.orders = action.payload;
    },
    [submitOrder.rejected]: handleRejected,
  },
});

export const goodsReducer = goodsSlice.reducer;
