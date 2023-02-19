import axios, { Axios } from "axios"
import { Dispatch } from "redux"
import { accept_notification, fetch_notifications, reject_notification } from "../slices/notifications/notificationsSlice"
import { AcceptAction, FetchAction, RejectAction } from "../slices/notifications/types"

export const fetchNotifications = (token: string) => {
  return async (dispatch: Dispatch<FetchAction>) => {
    try {
      const notifications_response = await axios.get('/api/v1/notifications', {
        headers: {
          'Authorization': token
        }
      })

      const notifications = notifications_response.data
      dispatch(fetch_notifications(notifications))
    } catch(e) {
      // alert(e)
    }
  }
}

export const rejectNotifications = (token: string, id: number) => {
  return async (dispatch: Dispatch<RejectAction>) => {
    try {
      await axios.delete(`/api/v1/notifications/${id}/reject`, {
        headers: {
          'Authorization': token
        }
      })
      dispatch(reject_notification(id))
    } catch(e) {
      alert(e)
    }
  }
}

export const acceptNotifications = (token: string, id: number) => {
  return async (dispatch: Dispatch<AcceptAction>) => {
    try {
      await axios.post(`/api/v1/notifications/${id}/complete`, {}, {
        headers: {
          'Authorization': token
        }
      })
      dispatch(accept_notification(id))
    } catch(e) {
      alert(e)
    }
  }
}
