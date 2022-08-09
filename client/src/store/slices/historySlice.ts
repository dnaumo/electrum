import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IHistory } from "../../models/models";

interface HistoryState {
  loading: boolean;
  error: string;
  history: IHistory;
}

const initialState: HistoryState = {
  loading: false,
  error: "",
  history: {} as IHistory,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IHistory>) {
      state.loading = false;
      state.history = action.payload;
      state.error = "";
    },
    fetchError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default historySlice.reducer;
