import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {},
});

export const currencyReducer = currencySlice.reducer;
