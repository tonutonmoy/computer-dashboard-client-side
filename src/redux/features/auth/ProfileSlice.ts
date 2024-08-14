/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  profileRefetchFunction: any;
}

const initialState: ProfileState = {
  profileRefetchFunction: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileRefetch: (state, action: PayloadAction<any>) => {
      state.profileRefetchFunction = action.payload;
    },
  },
});

export const { profileRefetch } = profileSlice.actions;

export default profileSlice.reducer;