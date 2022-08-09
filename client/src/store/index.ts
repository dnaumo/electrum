import { combineReducers, configureStore } from "@reduxjs/toolkit";

import addRequestReducer from "./slices/addRequestSlice";
import balanceReducer from "./slices/balanceSlice";
import historyReducer from "./slices/historySlice";
import payToReducer from "./slices/payToSlice";
import systemErrorReducer from "./slices/systemErrorSlice";

const rootReducer = combineReducers({
  history: historyReducer,
  balance: balanceReducer,
  payTo: payToReducer,
  systemError: systemErrorReducer,
  addRequest: addRequestReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
