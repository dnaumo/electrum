import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IBalance } from "../../models/models";

interface BalanceState {
  loading: boolean;
  error: string;
  balance: IBalance;
}

const initialState: BalanceState = {
  loading: false,
  error: "",
  balance: {} as IBalance,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IBalance>) {
      state.loading = false;
      state.balance = action.payload;
      state.error = "";
    },
    fetchError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default balanceSlice.reducer;
