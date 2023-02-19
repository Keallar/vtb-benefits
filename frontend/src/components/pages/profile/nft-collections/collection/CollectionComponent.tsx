import * as React from "react";
import styles from './Collection.module.scss'
import collection_background from '../../../../../assets/images/collection_background.png'
import { Avatar } from "@mui/material";
import { useAppDispatch } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { openNftCollectionModal } from "../../../../../stores/slices/modals/nft_collection/indexModal";

export interface CollectionProps {
  id: number
}

export const CollectionComponent: React.FC<CollectionProps> = ({id}) => {
  const dispatch = useAppDispatch()
  const showModal = () => {
    dispatch(openNftCollectionModal({
      collection_id: id,
      opened: true,
      nfts: []
    }))
  }

  return (
      <div className={styles.collection} onClick={showModal}>
        <div className={styles.collection__container}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 80,
              height: 80,
              bottom: 17,
              position: 'absolute',
              right: 17,
            }}
          />
          <div className={styles.collection__counter}>1</div>
        </div>
      </div>
    )
}