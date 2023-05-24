import { configureStore } from '@reduxjs/toolkit';
import { goodsReducer } from './slice';

export const store = configureStore({
  reducer: goodsReducer,
});
