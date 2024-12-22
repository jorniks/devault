
export const defaultChainId = 12227332

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
  12227332: {
    explorer: "https://xt4scan.ngd.network",
    label: "NeoX Testnet",
    nativeCurrency: { name: "GAS", symbol: "GAS", decimals: 18 },
    rpcUrl: "https://testnet.rpc.banelabs.org",
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/download/'