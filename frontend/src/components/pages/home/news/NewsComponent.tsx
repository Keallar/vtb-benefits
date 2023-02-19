import React from "react";
import styles from './News.module.scss'
import {ItemComponent, Props} from './item/ItemComponent'
import axios from "axios";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

export interface News {
  id?: number,
  title?: string,
  tread?: string,
  created_at?: string,
  image_url?: string
}

export const NewsComponent: React.FC = () => {
  const [news, setNews] = React.useState<News[]>([{}])
  const token = useTypedSelector(state => state.current_user.user.token)
  
  React.useEffect(
    () => {
      getNews()
    },
    []
  )

  const getNews = () => {
    axios.get('/api/v1/feeds',  {
      headers: {
        'Authorization': token
      }
    }).then(
      (response) => {
        const data = response.data
        setNews(data)
      }
    )
  }
  return (
    <div className={styles.news}>
      <h2>Новости</h2>
      {
        news.map((item: News)  => <ItemComponent key={item.id} title={item.title} tread={item.tread} id={item.id}/>)
      }
    </div>
  )
}