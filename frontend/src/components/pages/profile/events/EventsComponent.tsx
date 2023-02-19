import React from "react";
import { ItemComponent } from "../../home/events/item/ItemComponent";
import styles from '../../home/events/Events.module.scss'
import { EventProps } from "../../home/events/EventsComponent";

export const EventsComponent: React.FC = () => {
  const events: EventProps[] = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis dolorum, ab numquam alias illum saepe nemo dolor! Adipisci id temporibus perspiciatis unde quasi inventore ut minus modi ab atque?',
      created_at: '7 октября'
    },
    {
      id: 2,
      title: 'Lorem, ipsum.',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum perspiciatis vel qui! Ut placeat repudiandae magni culpa accusantium. Vitae aut assumenda maiores deleniti molestias, expedita nisi fuga explicabo delectus?',
      created_at: '6 октября'
    }
  ]

  return (
    <div className={styles.events} style={{margin: 5}}>
      <h2>Персональная лента</h2>
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