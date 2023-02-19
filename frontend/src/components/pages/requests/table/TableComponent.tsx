import * as React from "react"
import { ModalComponent } from "./ModalComponent"
import { Row, RowComponent } from "./RowComponent"
import styles from './Table.module.scss'

interface Header {
  id: number,
  title: string
}
export const TableComponent: React.FC = () => {
  const headers: Header[] = [
    { id: 1, title: 'ФИО сотрудника'},
    { id: 2, title: 'Должность'},
    { id: 3, title: 'Почта'},
    { id: 4, title: 'Тэги'},
    { id: 5, title: 'Соимость'},
    { id: 6, title: 'Действия'}
  ]

  const rows: Row[] = [
    {
      title: 'Привет',
      id: 1,
      fio: 'Lapshin I.A.',
      position: 'Ruby dev',
      email: 'ilapshin@mail.ru',
      tags: [{id:1, title: 'dev'}],
      amount: 10,
      type_id: 10,
      decription: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'ПРивет',
      id: 2,
      fio: 'Chernov I.R.',
      position: 'Python dev',
      email: 'ichernov@mail.ru',
      tags: [{id:1, title: 'dev'}],
      amount: 10,
      type_id: 10,
      decription: 'Lorem ipsum dolor sit amet.',
    },
  ]
  return (
    <div className={styles.table}>
      <table className={styles.table__table}>
        <tr className={styles.table_table_header}>
          {
            headers.map((header: Header) => <th key={header.id}>{header.title}</th>)
          }
        </tr>
        {
          rows.map((row: Row) => <RowComponent key={row.id} id={row.id} fio={row.fio} position={row.position} email={row.email} tags={row.tags} amount={row.amount} type_id={row.type_id} decription={row.decription} title={row.title}/>)
        }
      </table>
      <ModalComponent/>
    </div>
  )
}