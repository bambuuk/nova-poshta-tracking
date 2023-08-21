import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrderInfo: [],
  ordersHistory: [],
};

const ordersHistorySlice = createSlice({
  name: "ordersHistorySlice",
  initialState,
  reducers: {
    getCurrentOrderInfo: (state, action) => {
      state.currentOrderInfo = action.payload;
    },
    deleteCurrentOrderInfo: (state) => {
      state.currentOrderInfo = [];
    },
    addNumToHistoryList: (state, action) => {
      state.ordersHistory = [...state.ordersHistory, action.payload];
    },
    deleteHistoryList: (state) => {
      state.ordersHistory = [];
    }
  },
});

const { actions, reducer } = ordersHistorySlice;
export default reducer;
export const { getCurrentOrderInfo, deleteCurrentOrderInfo, addNumToHistoryList, deleteHistoryList } = actions;
