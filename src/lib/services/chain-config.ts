
export const defaultChainId = 5003

type ChainInfo = {
  explorer: string
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  rpcUrl: string
}

export const CHAIN_INFO: { [key: number]: ChainInfo } = {
  5003: {
    explorer: "https://explorer.sepolia.mantle.xyz",
    label: "Mantle Sepolia",
    nativeCurrency: { name: "MNT", symbol: "MNT", decimals: 18 },
    rpcUrl: "https://rpc.sepolia.mantle.xyz",
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/download/'