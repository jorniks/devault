/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWeb3React } from "@web3-react/core"
import { useAppContract } from "../services/useContract"
import { useCallback } from "react"
import { toast as customToast } from "@/components/ui/use-toast"
import { CHAIN_INFO } from "@/lib/services/chain-config"
import { extractErrorMessage } from "@/functions/misc-functions"
import { toast } from "react-toastify"
import { PinataSDK } from 'pinata-web3'
import { useSetRecoilState } from "recoil"
import { loadingState } from "@/app/state/atom"

export const useMintDocument = () => {
  const pinataCloudGateway = process.env.NEXT_PUBLIC_GATEWAY
  const contract = useAppContract()
  const { account, chainId } = useWeb3React()
  const setLoadingState = useSetRecoilState(loadingState)
  const explorerURL = chainId && CHAIN_INFO[chainId]?.explorer
  const pinata = new PinataSDK({
    pinataJwt: process.env.NEXT_PUBLIC_JWT_SECRET,
    pinataGateway: pinataCloudGateway
  })

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
        
        setLoadingState(false)
        return true
      } catch (mintDocumentError) {
        const errorMessage = extractErrorMessage(mintDocumentError)
        toast.error(errorMessage)
        setLoadingState(false)
        return false
      }
    }, [account, contract, explorerURL, setLoadingState]
  )

  const uploadToIpfs = useCallback(
    async (document: any, fileName: string) => {
      setLoadingState(true)

      if (!document) {
        toast.error("Select a document to proceed")
        setLoadingState(false)
        return false
      }

      if (!fileName) {
        toast.error("Enter document name to proceed")
        setLoadingState(false)
        return false
      }

      try {
        const upload = await pinata.upload.file(document)
        
        const lastDotIndex = document.name.lastIndexOf('.');
        const fileExtension = lastDotIndex !== -1 ? document.name.slice(lastDotIndex + 1) : '';


        const fileUrl = `https://${pinataCloudGateway}/ipfs/${upload.IpfsHash}`

        console.log(`File Url is : ${fileUrl} and File Extension is : ${fileExtension}`)
        
        return mintDocument(upload.IpfsHash, fileUrl, fileName, fileExtension)
      } catch (uploadToIpfsError) {
        setLoadingState(false)
        console.log("uploadToIpfsError", uploadToIpfsError);
        toast.error(String(uploadToIpfsError))
        return false
      }
    }, [mintDocument, pinata.upload, pinataCloudGateway, setLoadingState]
  )
  
  return {
    burnDocument,
    uploadToIpfs
  }
}