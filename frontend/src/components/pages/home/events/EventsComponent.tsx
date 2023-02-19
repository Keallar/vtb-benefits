import axios from "axios";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import styles from './Events.module.scss'
import { ItemComponent } from "./item/ItemComponent";

export interface EventProps {
  id?: number,
  title?: string,
  description?: string,
  created_at?: string
}

export const EventsComponent: React.FC = () => {
  const [events, setEvents] = React.useState<EventProps[]>([{}])
  const token = useTypedSelector(state => state.current_user.user.token)
  
  React.useEffect(
    () => {
      getEvents()
    },
    []
  )

  const getEvents = () => {
    axios.get('/api/v1/feeds',  {
      headers: {
        'Authorization': token
      }
    }).then(
      (response) => {
        const data = response.data
        setEvents(data)
      }
    )
  }
  
  return (
    <div className={styles.events}>
      <h2>Лента событий</h2>
      {
        events.map((item: EventProps)  => (
          <div key={item.id}>
            <ItemComponent title={item.title} description={item.description} id={item.id} created_at={item.created_at}/>
            <hr/>
          </div>
        )
      )
      }
    </div>
  )
}