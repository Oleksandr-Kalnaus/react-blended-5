import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestRates,
} from './operation';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: null,
    isLoading: false,
    isError: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = null;
        state.exchangeInfo = null;
      })
      .addCase(fetchLatestRates.pending, state => {
        state.isLoading = true;
        state.isError = null;
        state.rates = [];
      })
      .addCase(fetchLatestRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
      }),
});

export const currencyReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
