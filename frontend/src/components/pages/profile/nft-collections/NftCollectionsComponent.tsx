import * as React from "react";
import styles from './NftCollections.module.scss'
import flex_styles from '../Profile.module.scss'
import { CollectionComponent } from "./collection/CollectionComponent";
import { useAppDispatch } from "../../../../hooks/useActions";
import { initNftExchangeModal } from "../../../../stores/action-creators/exchangeNftModal";
import { openNftCollectionModal } from "../../../../stores/slices/modals/nft_exchange/exchangeModal";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

export const NftCollectionsComponent: React.FC = () => {
  const dispatch = useAppDispatch()
  const token = useTypedSelector(state => state.current_user.user.token)
  dispatch(initNftExchangeModal(token))

  const showModal = () => {
    dispatch(openNftCollectionModal({}))
  }

  return (
    <div>
      <div className={`${flex_styles.tile} ${styles.ntf_collections}`}>
        <div className={`${flex_styles.profile__row} ${styles.ntf_collections_first_row}`}>
          <span>
            <p>Мои NFT коллекции</p>
          </span>
          <span>
            <button className={styles.nft_collection__exchange} onClick={showModal}>Обменять</button>
          </span>
        </div>
        <div className={flex_styles.profile__row}>
          <CollectionComponent id={1}/>
        </div>
      </div>
    </div>
  )
}