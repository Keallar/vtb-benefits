import React from "react";
import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import { UserMenuComponent } from "./user_menu/UserMenuComponent";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { NotificationsComponent } from "./notifications/NotificationsComponent";

interface LinkItem {
  id: number,
  text: string,
  route: string,
  roles: string[],
}

export const HeaderComponent: React.FC = () => {
  const { loged_in, user } =  useTypedSelector(state => state.current_user)

  if (!loged_in) {
    return <div></div>
  }

  const links: LinkItem[] = [
    {
      id: 1,
      text: 'Запросы',
      route: '/requests',
      roles: ['admin'],
    },
    {
      id: 2,
      text: 'Мероприятия',
      route: '',
      roles: ['admin', 'user'],
    },
    {
      id: 3,
      text: 'Экономика',
      route: '/economic',
      roles: ['admin'],
    },
    {
      id: 4,
      text: 'Маркетплейс',
      route: '',
      roles: ['user'],
    }
  ]
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <div className={styles.logo}>
            <Link to='/'>VTB BENEFITS</Link>
          </div>
          <div className={styles.links}>
            <nav>
              {
                links.map(link => link.roles.includes(user.role) && <Link key={link.id} className={styles.links} to={link.route}>{link.text}</Link>)
              }
            </nav>
          </div>
          <NotificationsComponent/>
          <UserMenuComponent/>
        </div>
      </div>
    </header>
  )
}