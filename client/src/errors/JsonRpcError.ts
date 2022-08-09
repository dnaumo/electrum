import { IJsonRpcError } from "../models/models";

class JsonRpcError extends Error {
  statusCode: number | null;

  constructor({ code, message }: IJsonRpcError) {
    super(message);

    this.name = "JsonRpcError";
    this.statusCode = code;
  }
}

export default JsonRpcError;
