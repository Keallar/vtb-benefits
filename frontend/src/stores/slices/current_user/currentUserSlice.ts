import { createSlice } from '@reduxjs/toolkit'
import { CurrentUserState, ErrorAction, LoginAction, LogoutAction } from './types'

const initialState = (): CurrentUserState => {
  const user_from_ls = localStorage.getItem(userLocalstorageKey)
  const user = user_from_ls == null ? null : JSON.parse(user_from_ls)

  return {
    user,
    loged_in: user == null ? false : true,
    error: null
  }
}

export const currentUserSlice = createSlice({
  name: 'current_user',
  initialState,
  reducers: {
    login_user: (state: CurrentUserState, action: LoginAction) => {
      state.user = action.payload
      state.loged_in = true
    },
    logout_user: (state: CurrentUserState, action: LogoutAction) => {
      state.user = null
      state.loged_in = false
    },
    request_with_error: (state: CurrentUserState, action: ErrorAction) => {
      state.error = action.payload.error
    }
  }
})

export const userLocalstorageKey = 'current_user'
export const { login_user, logout_user, request_with_error } = currentUserSlice.actions
export default currentUserSlice.reducer
