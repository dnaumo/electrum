export interface ITransaction {
  balance: string;
  confirmations: number;
  date: string;
  height: number;
  incoming: boolean;
  label: string;
  timestamp: number;
  txid: string;
  txpos_in_block: number;
  value: string;
}

export interface ISummary {
  end_balance: string;
  end_date?: string;
  from_height?: string;
  incoming: string;
  outgoing: string;
  start_balance: string;
  start_date?: string;
  to_height?: string;
}

export interface IHistory {
  summary: ISummary;
  transactions: ITransaction[];
}

export interface IBalance {
  confirmed: string;
  unconfirmed?: string;
  unmatured?: string;
}

export interface IPayToResponse {
  complete: boolean;
  final: boolean;
  hex: string;
}

export interface IAddRequestResponse {
  time: number;
  amount: number;
  exp: number;
  address: string;
  memo: string;
  id: string;
  URI: string;
  status: string;
  "amount (BTC)": string;
}

export interface IJsonRpcError {
  code: number | null;
  message: string;
}

export interface ServerResponse<T> {
  id: string;
  jsonrpc: string;
  result: T;
}
