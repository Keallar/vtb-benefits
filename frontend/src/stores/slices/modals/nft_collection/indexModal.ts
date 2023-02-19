import { createSlice } from '@reduxjs/toolkit'
import { CloseAction, IndexState, OpenAction } from './types'

const initialState: IndexState = {
  collection_id: 0,
  opened: false,
  nfts: []
}

export const nftCollectionSlice = createSlice({
  name: 'nft_collection',
  initialState,
  reducers: {
    openNftCollectionModal: (state: IndexState, action: OpenAction) => {
      state.opened = true
    },
    closeNftCollectionModal: (state: IndexState, action: CloseAction) => {
      state.opened = false
    }, 
  }
})

export const { openNftCollectionModal, closeNftCollectionModal } = nftCollectionSlice.actions
export default nftCollectionSlice.reducer