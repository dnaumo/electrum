import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { expirations } from "../../constants/expirations";
import { useAppDispatch } from "../../hooks/redux";
import { addRequest } from "../../store/actions/addRequestActions";

import "./ReceiveBTC.scss";

type FormValues = {
  amount: string;
  memo: string;
  expiration: number;
};

function ReceiveBTC() {
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
      addRequest({
        amount: data.amount,
        memo: data.memo,
        expiration: data.expiration,
        force: false,
      }),
    );
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        amount: "",
        memo: "",
        expiration: 0,
      });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form receive-btc">
      <div className="title">Receive BTC</div>
      <FormControl variant="outlined">
        <FormHelperText>Description</FormHelperText>
        <OutlinedInput
          placeholder="Please input a description"
          multiline
          rows={3}
          {...register("memo")}
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
        <FormHelperText>
          <span>*</span> Expires in
        </FormHelperText>
        <TextField
          select
          defaultValue=""
          inputProps={register("expiration", { required: true })}
          error={Boolean(errors.expiration)}
        >
          {expirations.map((expiration) => (
            <MenuItem key={expiration.value} value={expiration.value}>
              {expiration.title}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <Button
        type="submit"
        className="btn btn-success"
        variant="contained"
        color="success"
      >
        Get
      </Button>
    </form>
  );
}

export default ReceiveBTC;
