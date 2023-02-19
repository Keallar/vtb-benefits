import React from "react";
import {Input, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { SettingProps } from "../SettingsComponent";
import styles from './Item.module.scss';
import { useForm } from 'react-hook-form';
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
// import { useAppDispatch } from '../../../../../../hooks/useActions';
import axios from 'axios';

type FormData = {
  max_coins_award: number,
  high_event_award_spread: number,
  low_event_award_spread: number,
  total_coins: number
};

export const ItemComponent: React.FC<SettingProps> = ({max_coins_award, low_event_award_spread, high_event_award_spread, total_coins}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const token = useTypedSelector(state => state.current_user.user.token)


  const onSubmit = handleSubmit(data => {
    axios.patch('/api/v1/settings', data, {
      headers: {
        'Authorization': token
      }
    })
  })

  // через стейт сохранять зачения
  const state = {value: ''};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    state.value = e.currentTarget.value;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <h3>Максимальное вознаграждение</h3>
          <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}></InputLabel>
          <Input aria-describedby="my-helper-text" {...register("max_coins_award")} value={state.value} onChange={handleChange} sx={{width: 400, mb: 3}}/>
        </div>
        <div>
          <h3>Нижняя граница множителя вознаграждения</h3>
          <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}></InputLabel>
          <Input aria-describedby="my-helper-text" {...register("low_event_award_spread")}  value={state.value} onChange={handleChange} sx={{width: 400, mb: 3}}/>
        </div>
        <div>
          <h3>Верхняя граница множителя вознаграждения</h3>
          <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}></InputLabel>
          <Input aria-describedby="my-helper-text" {...register("high_event_award_spread")} value={state.value} onChange={handleChange} sx={{width: 400, mb: 3}}/>
        </div>
        <div>
          <h3>Максимальное значение монет в банке</h3>
          <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}></InputLabel>
          <Input aria-describedby="my-helper-text" {...register("total_coins")} value={state.value} onChange={handleChange} sx={{width: 400, mb: 3}}/>
        </div>
        <Button
          sx={{mt: 1, width: '100%'}}
          variant="contained"
          type="submit"
        >
          Сохранить
        </Button>
      </div>
    </form>
  )
}