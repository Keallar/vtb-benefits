import { createSlice } from '@reduxjs/toolkit'
import { CloseAction, OpenAction, ReportModalState } from './types'

const initialState: ReportModalState = {
  id: 0,
  opened: false,
  title: '',
  type_id: 0,
  amount: 0,
  description: ''
}

export const reportModalSlice = createSlice({
  name: 'report_modal',
  initialState,
  reducers: {
    openReportModal: (state: ReportModalState, action: OpenAction ) => {
      state.id = action.payload.id
      state.amount = action.payload.amount
      state.title = action.payload.title
      state.type_id = action.payload.type_id
      state.description = action.payload.description
      state.opened = true
    },
    closeReportModal: (state: ReportModalState, action: CloseAction ) => {
      state.id = 0
      state.amount = 0
      state.title = ''
      state.type_id = 0
      state.description = ''
      state.opened = false
    }
  }
})

export const { openReportModal, closeReportModal } = reportModalSlice.actions
export default reportModalSlice.reducer