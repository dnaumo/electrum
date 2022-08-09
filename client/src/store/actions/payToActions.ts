import { JsonRpcMethods } from "../../enums/JsonRpcMethods";
import JsonRpcError from "../../errors/JsonRpcError";
import { IPayToResponse, ServerResponse } from "../../models/models";
import { axiosInstance as axios } from "../../utils/axios";
import { AppDispatch } from "../index";
import { payToSlice } from "../slices/payToSlice";
import { systemErrorSlice } from "../slices/systemErrorSlice";

interface IPayToParams {
  amount: string;
  destination: string;
  memo?: string;
  password: string;
}

export const payTo = (params: IPayToParams) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<ServerResponse<IPayToResponse>>("/", {
        jsonrpc: "2.0",
        id: "curltext",
        method: JsonRpcMethods.PayTo,
        params,
      });

      const { result } = response.data;

      dispatch(payToSlice.actions.payTo(result));

      await axios.post<ServerResponse<string>>("/", {
        jsonrpc: "2.0",
        id: "curltext",
        method: JsonRpcMethods.Broadcast,
        params: [result.hex],
      });

      dispatch(payToSlice.actions.fetchSuccess());
    } catch (e) {
      if (e instanceof JsonRpcError) {
        dispatch(
          systemErrorSlice.actions.fetchError({
            code: e.statusCode,
            message: e.message,
          }),
        );
      } else {
        dispatch(payToSlice.actions.fetchError((e as Error).message));
      }
    }
  };
};
