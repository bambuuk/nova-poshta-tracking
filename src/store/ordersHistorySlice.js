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
      if (!state.ordersHistory.includes(action.payload.toString())) {
        state.ordersHistory = [...state.ordersHistory, action.payload];
      }
    },
    deleteHistoryList: (state) => {
      state.ordersHistory = [];
    },
    delItemFromHistList: (state, action) => {
      state.ordersHistory = state.ordersHistory.filter(
        (item) => item !== action.payload
      );
    },
  },
});

const { actions, reducer } = ordersHistorySlice;
export default reducer;
export const {
  getCurrentOrderInfo,
  deleteCurrentOrderInfo,
  addNumToHistoryList,
  deleteHistoryList,
  delItemFromHistList,
} = actions;
