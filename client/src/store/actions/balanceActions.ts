import { JsonRpcMethods } from "../../enums/JsonRpcMethods";
import JsonRpcError from "../../errors/JsonRpcError";
import { IBalance, ServerResponse } from "../../models/models";
import { axiosInstance as axios } from "../../utils/axios";
import { AppDispatch } from "../index";
import { balanceSlice } from "../slices/balanceSlice";
import { systemErrorSlice } from "../slices/systemErrorSlice";

export const fetchBalance = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(balanceSlice.actions.fetching());

      const response = await axios.post<ServerResponse<IBalance>>("/", {
        jsonrpc: "2.0",
        id: "curltext",
        method: JsonRpcMethods.GetBalance,
        params: [],
      });

      dispatch(balanceSlice.actions.fetchSuccess(response.data.result));
    } catch (e) {
      if (e instanceof JsonRpcError) {
        dispatch(
          systemErrorSlice.actions.fetchError({
            code: e.statusCode,
            message: e.message,
          }),
        );
      } else {
        dispatch(balanceSlice.actions.fetchError((e as Error).message));
      }
    }
  };
};
