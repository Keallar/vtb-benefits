import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Button, Badge, Box, ClickAwayListener, SxProps } from "@mui/material";
import styles from './Notifications.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { acceptNotifications, fetchNotifications, rejectNotifications } from "../../../../stores/action-creators/notifications";

export const NotificationsComponent: React.FC = () => {
  const { notifications, count } = useTypedSelector(state => state.notifications)
  const dispatch = useAppDispatch()
  const notification = notifications[0]
  console.log(notification)
  const [open, setOpen] = React.useState(false);
  const token = useTypedSelector(state => state.current_user.user.token)
  const reject = () => {
    dispatch(rejectNotifications(token, notification.id))
  }

  const accept = () => {
    dispatch(acceptNotifications(token, notification.id))
  }

  const handleClick = () => {
    if(count > 0) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(
    () => {
      dispatch(fetchNotifications(token))
    },
    []
  )

  const handleClickAway = () => {
    setOpen(false);
  };

  const event_styles: SxProps = {
    position: 'absolute',
    top: 30,
    right: 0,
    left: -260,
    zIndex: 1,
    background: '#FFFFFF',
    border: '1px solid #EEF1FF',
    borderRadius: 2,
    width: 310,
    padding: 2
  };


  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <Button onClick={handleClick}>
          <Badge badgeContent={count} color="primary" showZero>
            <NotificationsActiveIcon sx={{color: '#232323'}}/>
          </Badge>
        </Button>
        {open ? (
          <Box sx={event_styles}>
            <div className={styles.notifications__row}>
              <div className={styles.notifications__col}>
                {`${notification.sender.username} хочет обменять "А" из коллекции "B" на "С" из коллекции "D"`}
              </div>
              <div className={styles.notifications__row}>
                <Button sx={{mr: 0.5, ml: 0.5, width: 40, height: 40}} variant="contained" color="success" onClick={accept}><CheckIcon/></Button>
                <Button sx={{mr: 0.5, ml: 0.5, width: 40, height: 40}} variant="contained" color="error" onClick={reject}><ClearIcon/></Button>
              </div>
            </div>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
    </div>
  )
}