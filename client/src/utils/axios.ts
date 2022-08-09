import { Buffer } from "buffer/";

import axios, { AxiosResponse } from "axios";

import JsonRpcError from "../errors/JsonRpcError";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json",
    Authorization: `Basic ${Buffer.from(
      `${process.env.REACT_APP_ELECTRUM_USER}:${process.env.REACT_APP_ELECTRUM_PASSWORD}`,
      "utf8",
    ).toString("base64")}`,
  },
});

axiosInstance.interceptors.response.use(function (response: AxiosResponse) {
  const { data } = response;

  if (data.error) {
    throw new JsonRpcError(data.error);
  }

  if (data.result?.error) {
    throw new Error(data.result.error);
  }

  return response;
});
