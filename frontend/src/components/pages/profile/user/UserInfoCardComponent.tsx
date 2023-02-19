import * as React from "react";
import styles from './UserInfoCard.module.scss'
import flex_styles from './../Profile.module.scss'
import { UserInfoResponse } from "../ProfileComponent";
import { Avatar } from "@mui/material";

export const UserInfoCardComponent: React.FC<UserInfoResponse> = (props: UserInfoResponse) => {
  return (
    <div className={flex_styles.tile} style={{minWidth: 650}}>
      <div className={flex_styles.profile__row}>
        <div className={flex_styles.profile__col} style={{flexGrow: 1}}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 170, height: 170 }}
          />
        </div>
        <div className={flex_styles.profile__col} style={{flexGrow: 2}}>
          <div className={flex_styles.profile__row} style={{justifyContent: 'space-between', alignItems: 'baseline'}}>
            <h3>
              {`${props.first_name} ${props.second_name} ${props.last_name}`}
            </h3>
            <div className={styles.amount}>
              <span>NFTs</span>
              <h2 style={{marginTop: 2}}>{props.current_coins}</h2>
            </div>
          </div>
          <div className={flex_styles.profile__row} style={{justifyContent: 'space-between', alignItems: 'baseline'}}>
            <div>
              <p>
                {props.official}
              </p>
              <p>
                {props.email}
              </p>
            </div>
            <div className={styles.amount}>
              <span>Баланс</span>
              <h2 style={{marginTop: 2}}>{props.all_coins}</h2>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr_style}/>
      <div className={flex_styles.profile__col}>
        <p>Мои тэги</p>
        <div className={styles.tags_container}>
          {
            props.tags.map(tag => <span className={styles.tag}>{tag.title}</span>)
          }
        </div>
      </div>
    </div>
  )
}