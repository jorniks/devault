import { useWeb3React } from "@web3-react/core";
import { useAppContract } from "../services/useContract"
import { useCallback} from "react";

export const useReadContract = () => {
  const contract = useAppContract()
  const { account } = useWeb3React()

  const getUserNFTs = useCallback(
    async () => {
      try {
        if (account) {
          const nfts = await contract?.getUserDocuments()
          return nfts
        }
      } catch (getUserNFTsError) {
        console.log('getUserNFTsError', getUserNFTsError);
      }
    }, [account, contract]
  )

  const getNFTMetadata = useCallback(
    async (tokenId: number) => {
      try {
        if (account) {
          const nftMetadata = await contract?.getDocumentMetadata(tokenId)
          return nftMetadata
        }
      } catch (getUserNFTsError) {
        console.log('getUserNFTsError', getUserNFTsError);
      }
    }, [account, contract]
  )

  return {
    getUserNFTs,
    getNFTMetadata
  }
}