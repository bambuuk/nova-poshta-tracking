import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrderInfo: [],
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
  },
});

const { actions, reducer } = ordersHistorySlice;
export default reducer;
export const { getCurrentOrderInfo, deleteCurrentOrderInfo } = actions;
