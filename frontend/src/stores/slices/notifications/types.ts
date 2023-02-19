export interface Notification {
  id: number,
  receiver: any,
  sender: any,
  type: string
}

export interface NotificationState {
  notifications: Notification[],
  count: number
}

export interface AcceptAction {
  type: string,
  payload: number
}

export interface RejectAction {
  type: string,
  payload: number
}

export interface FetchAction {
  type: string,
  payload: Notification[]
}