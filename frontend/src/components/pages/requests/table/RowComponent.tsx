import { Button } from "@mui/material"
import * as React from "react"
import styles from './Table.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ModeIcon from '@mui/icons-material/Mode';
import { openReportModal } from "../../../../stores/slices/modals/reportsModal";
import { useAppDispatch } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

export interface Tag {
  id: number,
  title: string
}

export interface Row {
  title: string
  id: number,
  fio: string,
  position: string,
  email: string,
  tags: Tag[],
  amount: number,
  type_id: number,
  decription: string,
}

export const RowComponent: React.FC<Row> = ({title, id, fio, position, email, tags, amount, type_id, decription}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch()
  const modal = useTypedSelector(state => state.requests_modal)

  const handleOpen = () => {
    dispatch(openReportModal(
      {
        id: id,
        title: title,
        type_id: type_id,
        amount: amount,
        description: decription,
        opened: true
      }
    ))
    setOpen(modal.opened);
  };
  
  const handleAccept = () => {}
  const handleReject = () => {}
  const handleEdit = () => {}

  const actions = [
    {
      id: 1,
      color: 'secondary',
      action: handleAccept,
      icon: '',
    },
    {
      id: 1,
      color: 'error',
      action: handleReject,
      icon: ''
    },
    {
      id: 1,
      color: 'secondary',
      action: handleEdit,
      icon: ''
    },
  ]
  return (
    <tr className={styles.table__table_tr}>
      <td className={styles.table__table_td}>{fio}</td>
      <td className={styles.table__table_td}>{position}</td>
      <td className={styles.table__table_td}>{email}</td>
      <td className={styles.table__table_td}>
        {
          tags.map((tag) => <span key={tag.id}>{tag.title} </span> )
        }
      </td>
      <td className={styles.table__table_td}>{amount}</td>
      <td className={styles.table__table_td}>
      <Button sx={{mr: 0.5, ml: 0.5}} variant="contained" color="success"><CheckIcon/></Button>
      <Button sx={{mr: 0.5, ml: 0.5}} variant="contained" color="error"><ClearIcon/></Button>
      <Button sx={{mr: 0.5, ml: 0.5}} variant="contained" onClick={handleOpen}><ModeIcon/></Button>
      </td>
    </tr>
  )
}
