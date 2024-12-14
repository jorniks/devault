export type TimerState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  completed?: boolean;
  isLoading?: boolean;
};

export enum ApprovalType {
  UNKNOWN = 'UNKNOWN',
  NOT_APPROVED = 'NOT_APPROVED',
  APPROVED = 'APPROVED',
}

export interface NFT {
  params: {
    name: string
    url: string
    "url-b64": string
    "unit-name": string
    total: number
  }
  imageUrl?: string
}

export interface NFTMetadata {
  documentHash: string;
  uploadTimestamp: number;
  documentURI: string;
  documentName: string;
  documentType: string;
}