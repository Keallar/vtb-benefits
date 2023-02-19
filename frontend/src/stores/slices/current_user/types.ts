export enum CurrentUserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

export interface LoginResponse {
  user_id: number,
  email: string,
  username: string,
  role: string | null,
  token: string
}

export interface LogoutResponse {}

export interface ErrorResponse {
  error: string
}
export interface CurrentUserState {
  user: LoginResponse | any,
  loged_in: boolean,
  error: null | string
}

export interface LoginAction {
  type: string,
  payload: LoginResponse
}

export interface LogoutAction {
  type: string,
  payload: LogoutResponse
}

export interface ErrorAction {
  type: string,
  payload: ErrorResponse
}


export type CurrentUserActions = LoginAction | ErrorAction | LogoutAction