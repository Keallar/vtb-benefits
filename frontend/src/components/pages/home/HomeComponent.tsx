import { style } from '@mui/system';
import styles from './Home.module.scss'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { NewsComponent } from './news/NewsComponent';
import { EventsComponent } from './events/EventsComponent';
import axios from 'axios';

export const HomeComponent: React.FC = () => {
  return (
    <div>
      <div className={styles.greating}>
        VTB Benefits
      </div>
      <div className={styles.content}>
        <NewsComponent/>
        <EventsComponent/>
      </div>
    </div>
  )
}