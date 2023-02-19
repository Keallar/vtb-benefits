import axios from "axios";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import styles from './Settings.module.scss'
import { ItemComponent } from "./item/ItemComponent";

export interface SettingProps {
  max_coins_award?: number,
  high_event_award_spread?: number,
  low_event_award_spread?: number,
  total_coins?: number
}

export const SettingsComponent: React.FC = () => {
  const [settings, setSettings] = React.useState<SettingProps>({})
  const token = useTypedSelector(state => state.current_user.user.token)
  
  React.useEffect(
    () => {
      getSettings()
    },
    []
  )

  const getSettings = () => {
    axios.get('/api/v1/settings',  {
      headers: {
        'Authorization': token
      }
    }).then(
      (response) => {
        const data = response.data
        setSettings(data)
      }
    )
  }
  
  return (
    <div className={styles.settings}>
      <h2>Глобальные настройки</h2>
      <ItemComponent max_coins_award={settings.max_coins_award} high_event_award_spread={settings.high_event_award_spread} low_event_award_spread={settings.low_event_award_spread}  total_coins={settings.total_coins}/>
    </div>
  )
}