import { JsonRpcMethods } from "../../enums/JsonRpcMethods";
import JsonRpcError from "../../errors/JsonRpcError";
import { IHistory, ServerResponse } from "../../models/models";
import { axiosInstance as axios } from "../../utils/axios";
import { AppDispatch } from "../index";
import { historySlice } from "../slices/historySlice";
import { systemErrorSlice } from "../slices/systemErrorSlice";

export const fetchTransactions = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(historySlice.actions.fetching());

      const response = await axios.post<ServerResponse<string>>("/", {
        jsonrpc: "2.0",
        id: "curltext",
        method: JsonRpcMethods.GetHistory,
        params: [],
      });

      const history: IHistory = JSON.parse(response.data.result);

      dispatch(historySlice.actions.fetchSuccess(history));
    } catch (e) {
      if (e instanceof JsonRpcError) {
        dispatch(
          systemErrorSlice.actions.fetchError({
            code: e.statusCode,
            message: e.message,
          }),
        );
      } else {
        dispatch(historySlice.actions.fetchError((e as Error).message));
      }
    }
  };
};
