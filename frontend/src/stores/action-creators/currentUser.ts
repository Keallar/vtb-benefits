import axios, { Axios } from "axios"
import { Dispatch } from "redux"
import { login_user, logout_user, request_with_error, userLocalstorageKey } from "../slices/current_user/currentUserSlice"
import { CurrentUserActions } from "../slices/current_user/types"

interface FormData {
  email: string,
  password: string
}
export const processLogin = (form_data: FormData) => {
  return async (dispatch: Dispatch<CurrentUserActions>) => {
    try {
      const response = await axios.post('/api/v1/users/login', form_data)
      const user = response.data
      const token = response.headers.authorization
      const localstorage_object = {...user, token: token}

      dispatch(login_user(user))
      localStorage.setItem(userLocalstorageKey, JSON.stringify(localstorage_object));
    } catch(e) {
      alert(e)
      dispatch(request_with_error({
        error: 'Error'
      }))
    }
  }
}

export const processLogout = () => {
  return async (dispatch: Dispatch<CurrentUserActions>) => {
    try {
      dispatch(logout_user({}))
      localStorage.removeItem(userLocalstorageKey)
    } catch(e) {
      dispatch(request_with_error({
        error: 'Error'
      }))
    }
  }
}