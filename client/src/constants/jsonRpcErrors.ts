interface IJsonRpcError {
  code: number;
  message: string;
  meaning: string;
}

export const jsonRpcErrors: IJsonRpcError[] = [
  {
    code: -32700,
    message: "Parse error",
    meaning:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  {
    code: -32600,
    message: "Invalid Request",
    meaning: "The JSON sent is not a valid Request object.",
  },
  {
    code: -32601,
    message: "Method not found",
    meaning: "The method does not exist / is not available.",
  },
  {
    code: -32602,
    message: "Invalid params",
    meaning: "Invalid method parameter(s).",
  },
  {
    code: -32603,
    message: "Internal error",
    meaning: "Internal JSON-RPC error.",
  },
];
