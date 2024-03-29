import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://tech-back.onrender.com/api';

export const fetchAllGoods = createAsyncThunk(
  'goods/fetchAllGoods',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/goods`);
      if (response.status === 304) {
        return;
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const submitOrder = createAsyncThunk(
  'orders/submitOrder',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(`/orders`, { ...values });
      if (response.status === 304) {
        return;
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
