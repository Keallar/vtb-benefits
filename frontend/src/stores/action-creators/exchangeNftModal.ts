import axios, { Axios } from "axios"
import { Dispatch } from "redux"
import { closeNftCollectionModal, initNftCollectionModal } from "../slices/modals/nft_exchange/exchangeModal"
import { CloseAction, InitAction, NFT } from "../slices/modals/nft_exchange/types"

export const initNftExchangeModal = (token: string) => {
  return async (dispatch: Dispatch<InitAction>) => {
    try {
      const employees_response = await axios.get('/api/v1/users', {
        headers: {
          'Authorization': token
        }
      })

      const employees = employees_response.data
      const my_nfts = [{tokenId: 1, uri: '12wesda', publicKey: '2efw342ref'}]
      const employee_nfts = [{tokenId: 2, uri: '12wesda', publicKey: '2efw342ref'}]

      dispatch(initNftCollectionModal({
        opened: false,
        employees: employees,
        my_nfts: my_nfts,
        employee_nfts: employee_nfts
      }))
    } catch(e) {
      alert(e)
    }
  }
}

export type ExcahangeFormData = {
  receiver_id: number
  sender_token_id: number,
  receiver_token_id: number,
  notification_type: string
};

export const SendExchangeRequest = (data: ExcahangeFormData, token: string) => {
  return async (dispatch: Dispatch<CloseAction>) => {
    try {
      data = {...data, notification_type: 'change'}
      const employees_response = await axios.post('/api/v1/notifications', data, {
        headers: {
          'Authorization': token
        }
      })

      dispatch(closeNftCollectionModal({opened: false}))
    } catch(e) {
      alert(e)
    }
  }
}