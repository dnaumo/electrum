import { JsonRpcMethods } from "../../enums/JsonRpcMethods";
import JsonRpcError from "../../errors/JsonRpcError";
import { IAddRequestResponse, ServerResponse } from "../../models/models";
import { axiosInstance as axios } from "../../utils/axios";
import { AppDispatch } from "../index";
import { addRequestSlice } from "../slices/addRequestSlice";
import { systemErrorSlice } from "../slices/systemErrorSlice";

interface IAddRequestParams {
  amount: string;
  memo?: string;
  expiration?: number;
  force?: boolean;
}

export const addRequest = (params: IAddRequestParams) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<ServerResponse<IAddRequestResponse>>(
        "/",
        {
          jsonrpc: "2.0",
          id: "curltext",
          method: JsonRpcMethods.AddRequest,
          params,
        },
      );

      dispatch(addRequestSlice.actions.addRequest(response.data.result));
    } catch (e) {
      if (e instanceof JsonRpcError) {
        dispatch(
          systemErrorSlice.actions.fetchError({
            code: e.statusCode,
            message: e.message,
          }),
        );
      } else {
        dispatch(addRequestSlice.actions.fetchError((e as Error).message));
      }
    }
  };
};
