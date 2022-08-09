import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import "./History.scss";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ITransaction } from "../../models/models";
import { fetchTransactions } from "../../store/actions/historyActions";

function History() {
  const dispatch = useAppDispatch();
  const { error, loading, history } = useAppSelector((state) => state.history);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchTransactions());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  function getAmount(params: GridValueGetterParams) {
    return `${params.row.incoming ? "+" : "-"} ${params.row.value}`;
  }

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", sortable: false, width: 163 },
    { field: "label", headerName: "Description", sortable: false, width: 433 },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {params.row.confirmations > 6 ? (
            <div className="status succeeded">Succeeded</div>
          ) : (
            <div className="status unconfirmed">Unconfirmed</div>
          )}
        </>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 140,
      valueGetter: getAmount,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {params.row.incoming ? (
            <div className="amount green">+ {Math.abs(params.row.value)}</div>
          ) : (
            <div className="amount red">- {Math.abs(params.row.value)}</div>
          )}
        </>
      ),
    },
    { field: "balance", headerName: "Balance", sortable: false, width: 140 },
  ];

  const transactions: GridRowsProp = history.transactions
    ? history.transactions
    : [];

  return (
    <div className="container history-page">
      {error && <p>{error}</p>}
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        }}
        className="transactions-grid"
        disableColumnFilter
        disableColumnMenu
        hideFooterSelectedRowCount
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        loading={loading}
        getRowId={(row: ITransaction) => row.txid}
        rows={transactions}
      />
    </div>
  );
}

export default History;
