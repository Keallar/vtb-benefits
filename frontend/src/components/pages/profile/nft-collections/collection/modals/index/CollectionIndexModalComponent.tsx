import * as React from 'react';
import styles from './CollectionIndexModal.module.scss'
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from '../../../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../../../hooks/useTypedSelector';
import { closeNftCollectionModal } from '../../../../../../../stores/slices/modals/nft_collection/indexModal';

export default function CollectionIndexModalComponent() {
  const dispatch = useAppDispatch()
  const modal =  useTypedSelector(state => state.nft_collection_index_modal)

  const handleClose = () => dispatch(closeNftCollectionModal({}));

  return (
    <div>
      <Modal
        open={modal.opened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <h3>Просмотр</h3>
          <div>
            <ClearIcon sx={{cursor: 'pointer'}} onClick={handleClose} className={styles.modal__close}/>
          </div>
        </div>
      </Modal>
    </div>
  );
}
