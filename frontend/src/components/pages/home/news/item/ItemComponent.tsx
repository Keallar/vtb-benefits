import React from "react";
import { News } from "../NewsComponent";
import styles from './Item.module.scss'

export interface Props {
  id: number,
  title: string,
  text: string
}

export const ItemComponent: React.FC<News> = ({id, title, tread}) => {
  return (
    <div className={styles.news}>
      <div className={styles.row}>
        <h3>{title}</h3>
        <button>Подробнее</button>
      </div>
      <p>{tread}</p>
    </div>
  )
}