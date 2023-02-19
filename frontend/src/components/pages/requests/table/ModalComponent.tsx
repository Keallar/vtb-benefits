import * as React from 'react';
import styles from './Table.module.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { closeReportModal, openReportModal } from '../../../../stores/slices/modals/reportsModal';
import { useAppDispatch } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { Input, InputLabel, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useForm } from 'react-hook-form';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  background: '#FFFFFF',
  border: '3px solid #7F91E3',
  'box-shadow': '0px 4px 4px #7F91E3',
  'border-radius': '10px',
  pt: 3,
  px: 4,
  pb: 3,
};

type FormData = {
  title: string;
  type_id: number;
  amount: number;
  description: string;
};

export function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch()
  const modal =  useTypedSelector(state => state.requests_modal)
  let isOpened = modal.opened
  const handleClose = () => {
    dispatch(closeReportModal({}))
    setOpen(modal.opened)
  };
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => data)

  return (
    <React.Fragment>
    <Modal
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h3>Редактирование</h3>
        <div>
          <ClearIcon sx={{cursor: 'pointer'}} onClick={handleClose} className={styles.modal__close}/>
        </div>
        <form onSubmit={onSubmit}>
          <InputLabel htmlFor="my-input" className={styles.input}>Название</InputLabel>
          <Input aria-describedby="my-helper-text"  {...register("title")} sx={{width: 333, mb: 3}}/>
          
          <InputLabel htmlFor="my-input" className={styles.input}>Тип запроса</InputLabel>
          <Input aria-describedby="my-helper-text" {...register("type_id")} sx={{width: 333, mb: 3}}/>
          
          <InputLabel htmlFor="my-input" className={styles.input}>Стоимость</InputLabel>
          <Input aria-describedby="my-helper-text" {...register("amount")} sx={{width: 333, mb: 3}}/>

          <InputLabel htmlFor="my-input" className={styles.input}>Описание</InputLabel>
          <TextField rows={10} aria-describedby="my-helper-text" {...register("description")} sx={{width: 333, mb: 3}}/>
          <br />
          <Button
            sx={{mt: 1, width: '100%'}}
            variant="contained"
            type="submit"
          >
            Сохранить
          </Button>
        </form>
      </Box>
    </Modal>
    </React.Fragment>
  );
}