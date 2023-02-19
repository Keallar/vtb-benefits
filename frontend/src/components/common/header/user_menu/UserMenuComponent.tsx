import { Avatar, Badge, Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { processLogout } from "../../../../stores/action-creators/currentUser";
import styles from './UserMenu.module.scss'

export const UserMenuComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user } = useTypedSelector(state => state.current_user)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(processLogout())
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {user.username}
        </Button>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 40, height: 40 }}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>Выход</MenuItem>
          <Link className={styles.links} to='/profile'>
            <MenuItem>Профиль
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </div>
  );
}