export interface ExchangeState {
  opened: boolean, 
  my_nfts: NFT[],
  employee_nfts: NFT[],
  employees: Employee[]
}

export interface NFT {
  tokenId: number,
  uri: string,
  publicKey: string
}

export interface OpenAction {
  type: string
  payload: any
}

export interface CloseAction {
  type: string,
  payload: any
}

export interface InitAction {
  type: string
  payload: ExchangeState
}

export interface Employee {
  id: number,
  username: string,
  official: string
}