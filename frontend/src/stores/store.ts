import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import currentUserReducer from './slices/current_user/currentUserSlice'
import requestsModalReducer from './slices/modals/reportsModal'
import nftCollectionModalReducer from './slices/modals/nft_collection/indexModal'
import nftCollectionExchangeModalReducer from './slices/modals/nft_exchange/exchangeModal'
import notificationsReducer from './slices/notifications/notificationsSlice'

export const store = configureStore(
  {
    reducer: {
      current_user: currentUserReducer,
      requests_modal: requestsModalReducer,
      nft_collection_index_modal: nftCollectionModalReducer,
      nft_collection_exchange_modal: nftCollectionExchangeModalReducer,
      notifications: notificationsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch