/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventoryData: [],
  sellProductId: "",
};

const setInventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventoryData: (state: any, action) => {
      state.inventoryData = action?.payload?.data;
    },
    setProductId: (state: any, action) => {
      console.log(action?.payload);
      state.sellProductId = action?.payload;
    },
  },
});

export const { setInventoryData, setProductId } = setInventorySlice.actions;

export default setInventorySlice.reducer;
