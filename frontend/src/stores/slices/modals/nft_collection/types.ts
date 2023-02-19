export interface IndexState {
  collection_id: number,
  opened: boolean, 
  nfts: NFT[]
}

export interface NFT {
  tokenId: number,
  uri: string,
  publicKey: string
}

export interface OpenAction {
  type: string
  payload: IndexState
}

export interface CloseAction {
  type: string,
  payload: any
}