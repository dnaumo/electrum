import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IJsonRpcError } from "../../models/models";

const initialState: IJsonRpcError = {
  code: null,
  message: "",
};

export const systemErrorSlice = createSlice({
  name: "jsonRpcError",
  initialState,
  reducers: {
    stateReset(state) {
      state.code = null;
      state.message = "";
    },
    fetchError(state, action: PayloadAction<IJsonRpcError>) {
      state.code = action.payload.code;
      state.message = action.payload.message;
    },
  },
});

export default systemErrorSlice.reducer;
