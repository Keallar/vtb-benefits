import * as React from "react"
import styles from './Requests.module.scss'
import { TableComponent } from "./table/TableComponent"

export const RequestsComponent: React.FC = () => {
  return (
    <div className={styles.requests}>
      <h1>Запросы</h1>
      <h2>Эта страница показывает запросы</h2>
      <TableComponent/>
    </div>
  )
}