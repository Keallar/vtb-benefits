import React from "react";
import { EventProps } from "../EventsComponent";
import styles from './Item.module.scss'

export const ItemComponent: React.FC<EventProps> = ({id, title, description, created_at}) => {
  return (
    <div className={styles.events}>
      <div className={styles.row}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <h3>{created_at}</h3>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}