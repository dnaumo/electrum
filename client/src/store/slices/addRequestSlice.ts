import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddRequestResponse } from "../../models/models";

interface AddRequestState {
  access: IAddRequestResponse;
  error: string;
}

const initialState: AddRequestState = {
  access: {} as IAddRequestResponse,
  error: "",
};

export const addRequestSlice = createSlice({
  name: "addrequest",
  initialState,
  reducers: {
    addRequest(state, action: PayloadAction<IAddRequestResponse>) {
      state.access = action.payload;
    },
    fetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default addRequestSlice.reducer;
