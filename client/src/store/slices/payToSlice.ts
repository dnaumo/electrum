import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPayToResponse } from "../../models/models";

interface PayToState {
  access: IPayToResponse;
  error: string;
}

const initialState: PayToState = {
  access: {} as IPayToResponse,
  error: "",
};

export const payToSlice = createSlice({
  name: "payto",
  initialState,
  reducers: {
    payTo(state, action: PayloadAction<IPayToResponse>) {
      state.access = action.payload;
    },
    fetchSuccess(state) {
      state.error = "";
    },
    fetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default payToSlice.reducer;
