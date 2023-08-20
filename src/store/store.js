import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import ordersHistorySlice from './ordersHistorySlice';

const store = configureStore({
  reducer: {
    ordersHistorySlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
