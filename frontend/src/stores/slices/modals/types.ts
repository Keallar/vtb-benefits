export interface ReportModalState {
  id: number,
  title: string,
  type_id: number,
  amount: number,
  description: string
  opened: boolean
}

export interface OpenAction {
  type: string
  payload: ReportModalState
}

export interface CloseAction {
  type: string,
  payload: any
}