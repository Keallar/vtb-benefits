import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { processLogin } from "../../../stores/action-creators/currentUser";
import styles from './Login.module.scss'

type FormData = {
  email: string;
  password: string;
};

export const LoginComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const dispatch = useAppDispatch()
  const onSubmit = handleSubmit(data => {
    dispatch(processLogin(data))
  })
  const { loged_in } =  useTypedSelector(state => state.current_user)

  if (loged_in) {
    return (
      <Navigate to="/" />
    )
  }

  return (
    <div className={styles.card}>
      <form onSubmit={onSubmit}>
        <InputLabel htmlFor="my-input" className={styles.input}>Логин</InputLabel>
        <Input aria-describedby="my-helper-text"  {...register("email")} sx={{width: 200}}/>
        <InputLabel htmlFor="my-input" className={styles.input}>Пароль</InputLabel>
        <Input aria-describedby="my-helper-text" type="password"  {...register("password")} sx={{width: 200}}/>
        <br />
        <Button
          sx={{mt: 2, width: '100%'}}
          variant="contained"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </div>
  );
}