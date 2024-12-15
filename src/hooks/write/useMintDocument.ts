import { useWeb3React } from "@web3-react/core"
import { useAppContract } from "../services/useContract"
import { useCallback } from "react"
import { toast as customToast } from "@/components/ui/use-toast"
import { CHAIN_INFO } from "@/lib/services/chain-config"
import { extractErrorMessage } from "@/functions/misc-functions"
import { toast } from "react-toastify"

export const useMintDocument = () => {
  const contract = useAppContract()
  const { account, chainId } = useWeb3React()
  const explorerURL = chainId && CHAIN_INFO[chainId].explorer

  const mintDocument = useCallback(
    async (documentHash: string, documentURI: string, documentName: string, documentType: string) => {
      try {
        if (!account) {
          toast.error("No wallet connected")
          return false;
        }

        const mintedDocument = await contract?.storeDocument(documentHash, documentURI, documentName, documentType)
        const mintedDocumentReceipt = await mintedDocument?.wait()
        
        customToast({
          variant: "success",
          description: "Document successfully minted",
          action: {url: `${explorerURL}/tx/${mintedDocumentReceipt?.hash || mintedDocumentReceipt?.transactionHash}`, label: "View in explorer"}
        })

        return true
      } catch (mintDocumentError) {
        const errorMessage = extractErrorMessage(mintDocumentError)
        toast.error(errorMessage)
        return false
      }
    }, [account, contract, explorerURL]
  )

  const burnDocument = useCallback(
    async (documentId: number) => {
      try {
        if (!account) {
          toast.error("No wallet connected")
          return false;
        }

        const burntDocument = await contract?.burnDocument(documentId)
        const burntDocumentReceipt = await burntDocument?.wait()
        
        customToast({
          variant: "success",
          description: "Document successfully burned",
          action: {url: `${explorerURL}/tx/${burntDocumentReceipt?.hash || burntDocumentReceipt?.transactionHash}`, label: "View in explorer"}
        })

        return true
      } catch (burnDocumentError) {
        const errorMessage = extractErrorMessage(burnDocumentError)
        toast.error(errorMessage)
        return false
      }
    }, [account, contract, explorerURL]
  )
  
  return {
    mintDocument,
    burnDocument
  }
}