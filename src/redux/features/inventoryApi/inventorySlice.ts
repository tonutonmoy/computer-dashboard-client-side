/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventoryData: [],
};

const setInventorySlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInventoryData: (state: any, action) => {
      state.inventoryData = action?.payload?.data;
    },
  },
});

export const { setInventoryData } = setInventorySlice.actions;

export default setInventorySlice.reducer;
