import * as React from "react";
import { EventsComponent } from "./events/EventsComponent";
import styles from './Profile.module.scss'
import { NftCollectionsComponent } from "./nft-collections/NftCollectionsComponent";
import axios from "axios";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useState } from "react";
import { UserInfoCardComponent } from "./user/UserInfoCardComponent";
import CollectionIndexModalComponent from "./nft-collections/collection/modals/index/CollectionIndexModalComponent";
import NftExchangeModalComponent from "./nft-collections/collection/modals/exchange/NftExchangeModalComponent";

export interface UserInfoResponse {
  id?: number,
  email?: string,
  first_name?: string,
  second_name?: string,
  last_name?: string,
  role?: string,
  official?: string,
  all_coins?: string,
  current_coins?: string,
  date_of_deployment?: string
  public_key?: string
  tags: [any]
}

export const ProfileComponent: React.FC = () => {
  const [user_info, setUserInfo] = useState<UserInfoResponse>({tags: [{}]})

  const token = useTypedSelector(state => state.current_user.user.token)
  const getUserInfo = () => {
    const response = axios.get('/api/v1/users/me',  {
      headers: {
        'Authorization': token
      }
    }).then(
      (response) => {
        const data = response.data
        setUserInfo(data)
      }
    )
  }

  React.useEffect(
    () => {
      getUserInfo()
    },
    []
  )

  return (
    <div className={styles.profile}>
      <div className={styles.profile__row}>
        <div className={styles.profile__col}>
          <UserInfoCardComponent
            email={user_info.email} 
            official={user_info.official}
            first_name={user_info.first_name}
            last_name={user_info.last_name}
            second_name={user_info.second_name}
            current_coins={user_info.current_coins}
            all_coins={user_info.all_coins}
            tags={user_info.tags}
          />
          <NftCollectionsComponent/>
        </div>
        <div className={styles.profile__col}>
          <EventsComponent/>
        </div>
      </div>
      <div className={styles.profile__row}>
      </div>
      <CollectionIndexModalComponent/>
      <NftExchangeModalComponent/>
    </div>
  )
}