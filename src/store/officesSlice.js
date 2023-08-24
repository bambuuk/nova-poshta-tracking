import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  officesItemList: [],
  branchType: "",
};

const officesSlice = createSlice({
  name: "officesList",
  initialState,
  reducers: {
    getOfficesList: (state, action) => {
      state.officesItemList = action.payload;
    },
    deleteOfficesList: (state) => {
      state.officesItemList = [];
    },
    changeBranchType: (state, action) => {
      state.branchType = action.payload;
    },
    deleteBranchType: (state) => {
      state.branchType = "";
    },
  },
});

const { actions, reducer } = officesSlice;
export default reducer;
export const {
  getOfficesList,
  deleteOfficesList,
  changeBranchType,
  deleteBranchType,
} = actions;
