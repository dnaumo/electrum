import { Alert, Snackbar } from "@mui/material";
import * as React from "react";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { systemErrorSlice } from "../store/slices/systemErrorSlice";

function SystemNotification() {
  const dispatch = useAppDispatch();
  const { code, message } = useAppSelector((state) => state.systemError);

  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }

      dispatch(systemErrorSlice.actions.stateReset());
    },
    [],
  );

  return (
    <Snackbar
      open={Boolean(code)}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SystemNotification;
