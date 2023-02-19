import { createSlice } from '@reduxjs/toolkit'
import { AcceptAction, FetchAction, NotificationState, RejectAction, Notification } from './types'

const initialState: NotificationState = {
  notifications: [],
  count: 0
}

export const notificationsSlice = createSlice({
  name: 'current_user',
  initialState,
  reducers: {
    accept_notification: (state: NotificationState, action: RejectAction) => {
      const new_notifications = state.notifications.filter((notification: Notification) => notification.id != action.payload)
      const count = new_notifications.length

      state.count = count
      state.notifications = new_notifications
    },
    reject_notification: (state: NotificationState, action: AcceptAction) => {
      const new_notifications = state.notifications.filter((notification: Notification) => notification.id != action.payload)
      const count = new_notifications.length

      state.count = count
      state.notifications = new_notifications
    },
    fetch_notifications: (state: NotificationState, action: FetchAction) => {
      const new_notifications = action.payload
      const count = new_notifications.length

      state.count = count
      state.notifications = new_notifications
    }
  }
})

export const { reject_notification, accept_notification, fetch_notifications } = notificationsSlice.actions
export default notificationsSlice.reducer