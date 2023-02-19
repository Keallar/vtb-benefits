import { createSlice } from '@reduxjs/toolkit'
import { CloseAction, ExchangeState, InitAction, OpenAction } from './types'

const initialState: ExchangeState = {
  employees: [],
  my_nfts: [],
  employee_nfts: [],
  opened: false
}

export const nftExchangeSlice = createSlice({
  name: 'nft_exchange',
  initialState,
  reducers: {
    openNftCollectionModal: (state: ExchangeState, action: OpenAction) => {
      state.opened = true
    },
    closeNftCollectionModal: (state: ExchangeState, action: CloseAction) => {
      state.opened = false
    }, 
    initNftCollectionModal: (state: ExchangeState, action: InitAction) => {
      state.opened = action.payload.opened
      state.employees = action.payload.employees
      state.my_nfts = action.payload.my_nfts
      state.employee_nfts = action.payload.employee_nfts
    }
  }
})

export const { openNftCollectionModal, closeNftCollectionModal, initNftCollectionModal } = nftExchangeSlice.actions
export default nftExchangeSlice.reducer