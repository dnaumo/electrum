import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import "./SendBTC.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../hooks/redux";
import { payTo } from "../../store/actions/payToActions";

type FormValues = {
  amount: string;
  destination: string;
  memo: string;
};

function SendBTC() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    dispatch(
      payTo({
        amount: data.amount,
        destination: data.destination,
        password: process.env.REACT_APP_WALLET_PASSPHRASE ?? "",
      }),
    );
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        amount: "",
        destination: "",
        memo: "",
      });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form send-btc">
      <div className="title">Send BTC</div>
      <FormControl variant="outlined">
        <FormHelperText>
          <span>*</span> Recipient
        </FormHelperText>
        <OutlinedInput
          placeholder="Please input an address"
          error={Boolean(errors.destination)}
          {...register("destination", {
            required: true,
            pattern:
              /(?:[13]{1}[a-km-zA-HJ-NP-Z1-9]{26,33}|bc1[a-z0-9]{39,59})/g,
          })}
        />
      </FormControl>
      <FormControl variant="outlined">
        <FormHelperText>
          <span>*</span> Amount
        </FormHelperText>
        <OutlinedInput
          placeholder="Please input an amount"
          type="number"
          endAdornment={<InputAdornment position="end">mBTC</InputAdornment>}
          error={Boolean(errors.amount)}
          {...register("amount", { required: true })}
        />
      </FormControl>
      <FormControl variant="outlined">
        <FormHelperText>Description</FormHelperText>
        <OutlinedInput
          placeholder="Please input a description"
          multiline
          rows={3}
          {...register("memo")}
        />
      </FormControl>
      <Button type="submit" className="btn btn-primary" variant="contained">
        Send
      </Button>
    </form>
  );
}

export default SendBTC;
