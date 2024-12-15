import { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NFTMetadata } from '@/types'
import { useReadContract } from '@/hooks/read/useReadContract'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'

const NFTCard = ({ nftId }: { nftId: number }) => {
  const [NFTInfo, setNFTInfo] = useState<NFTMetadata>({
    documentHash: '',
    uploadTimestamp: 0,
    documentURI: '',
    documentName: '',
    documentType: '',
  })
  const [fullScreenMode, setFullScreenMode] = useState(false)
  const { getNFTMetadata } = useReadContract()

  useEffect(() => {
    getNFTMetadata(nftId).then(setNFTInfo)
  }, [getNFTMetadata, nftId])
  
  const imageTypes = ["png", "jpeg", "jpg", 'gif', ''];

  return (
    <Dialog open={fullScreenMode} onOpenChange={setFullScreenMode}>
      <DialogTrigger>
        <div className="flex flex-col gap-1 py-3 px-2 bg-[#2B9DDA]/40 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-300">
          {imageTypes.includes(NFTInfo.documentType) ? (
            <Image src={NFTInfo?.documentURI} alt={NFTInfo?.documentName} className="rounded-md w-auto h-60 object-cover" height={10000} width={10000} />
          ) : (
            <iframe
              src={NFTInfo?.documentURI}
              title={NFTInfo?.documentName}
              className="rounded-md w-auto h-60"
            ></iframe>
          )}


          <div className="text-start mt-2 ml-2 mb-2 ">
            <h6 className="text-[#2B9DDA]">{NFTInfo?.documentName}</h6>
            <h6 className="md:text-xl md:mb-2">{NFTInfo?.documentType || 'jpg'}</h6>
          </div>

          <Button className="px-4 py-2 btn hover:bg-[#2B9DDA]">View</Button>
        </div>
      </DialogTrigger>

      <DialogContent className="w-full max-w-4xl">
        <DialogTitle></DialogTitle>

        <div className="h-[80vh]">
          {NFTInfo.documentType === `${imageTypes[0]}` || NFTInfo.documentType === `${imageTypes[1]}` || NFTInfo.documentType === `${imageTypes[2]}` ? (
            <Image src={NFTInfo?.documentURI} alt="Fullscreen NFT" className="w-auto h-full object-cover" height={10000} width={10000} />
          ) : (
            <iframe
              src={NFTInfo?.documentURI}
              title={NFTInfo?.documentName}
              className="w-full h-full object-contain"
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default NFTCard