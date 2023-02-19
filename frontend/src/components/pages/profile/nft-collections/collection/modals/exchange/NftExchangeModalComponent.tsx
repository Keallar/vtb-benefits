import { Avatar, Button, FormControlLabel, Input, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select, TextField } from '@mui/material';
import * as React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from '../../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../../hooks/useTypedSelector';
import { closeNftCollectionModal } from '../../../../../../../stores/slices/modals/nft_exchange/exchangeModal';
import styles from './NftExchangeModal.module.scss'
import { useForm } from 'react-hook-form';
import { Employee, NFT } from '../../../../../../../stores/slices/modals/nft_exchange/types';
import { SendExchangeRequest } from '../../../../../../../stores/action-creators/exchangeNftModal';



export type FormData = {
  receiver_id: number
  sender_token_id: number,
  receiver_token_id: number,
  notification_type: string
};

export default function NftExchangeModal() {
  const dispatch = useAppDispatch()
  const modal =  useTypedSelector(state => state.nft_collection_exchange_modal)
  const token = useTypedSelector(state => state.current_user.user.token)

  const handleClose = () => dispatch(closeNftCollectionModal({}));
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => dispatch(SendExchangeRequest(data, token)))

  return (
    <div>
      <Modal
        open={modal.opened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <h3>Обменять</h3>
          <div>
            <ClearIcon sx={{cursor: 'pointer'}} onClick={handleClose} className={styles.modal__close}/>
          </div>

          <form onSubmit={onSubmit}>
            <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}>Выберите сотрудника</InputLabel>
            <Select {...register("receiver_id")} sx={{width: '100%', mb: 3}}>
              {
                modal.employees.map((empl: Employee) => <MenuItem key={empl.id} value={empl.id} sx={{width: '100%'}}>{`${empl.username} (${empl.official})`}</MenuItem>)
              }
            </Select>
            <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}>Выберите сертификат из вашей коллекции</InputLabel>
            <div className={styles.modal__nft_picker}>
              {
                modal.my_nfts.map((nft: NFT) => (
                  <div key={nft.uri} className={styles.modal__nft_item}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "10px auto",
                      }}
                    />
                    <input type="radio" className={styles.radio} {...register("sender_token_id")} value={nft.tokenId} />
                  </div>
                ))
              }
            </div>

            <InputLabel htmlFor="my-input" className={styles.input} sx={{with: 200}}>Выберите сертификат из вашей коллекции</InputLabel>
            <div className={styles.modal__nft_picker}>
              {
                modal.my_nfts.map((nft: NFT) => (
                  <div key={nft.uri} className={styles.modal__nft_item}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "10px auto",
                      }}
                    />
                    <input type="radio" className={styles.radio} {...register("receiver_token_id")} value={nft.tokenId} />
                  </div>
                ))
              }
            </div>

            <br />
            <Button
              sx={{mt: 1, width: '100%'}}
              variant="contained"
              type="submit"
            >
              Предложить обмен
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
