import { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { NFTMetadata } from '@/types'
import { useReadContract } from '@/hooks/read/useReadContract'

const NFTCard = ({ nftId }: { nftId: number }) => {
  const [fullscreenNftUrl, setFullscreenNftUrl] = useState("");
  const [NFTInfo, setNFTInfo] = useState<NFTMetadata>({})
  const { getNFTMetadata } = useReadContract()

  const handleNftDoubleClick = (nftUrl: string) => {
    setFullscreenNftUrl(nftUrl)
    document.body.classList.add("overflow-hidden")
  }

  const handleCloseFullscreen = () => {
    setFullscreenNftUrl("")
    document.body.classList.remove("overflow-hidden")
  }

  useEffect(() => {
    getNFTMetadata(nftId).then(setNFTInfo)
  }, [getNFTMetadata, nftId])
  
  const imageTypes = ["png", "jpeg", "jpg", 'gif'];

  return (
    <div className="">
      <div onDoubleClick={() => handleNftDoubleClick(NFTInfo?.documentURI)}
        className="flex flex-col gap-1 p-3 bg-[#1E1E1E] rounded-md cursor-pointer border border-[#2B9DDA] hover:bg-[#3f3f3f] hover:border-gray-900 transition-colors h-11/12"
      >
        {NFTInfo.documentType === `${imageTypes[0]}` || NFTInfo.documentType === `${imageTypes[1]}` || NFTInfo.documentType === `${imageTypes[2]}` ? (
          <Image src={NFTInfo?.documentURI} alt={NFTInfo?.documentName} className="rounded-lg w-full h-20 md:h-40" height={10000} width={10000} />
        ) : (
          <iframe 
            src={NFTInfo?.documentURI} 
            title={NFTInfo?.documentName} 
            className="rounded-lg w-full h-20 md:h-40" 
            height={10000} 
            width={10000} 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        )}


        <div className="text-start mt-2 ml-2 mb-2 ">
          <h6 className="text-[#2B9DDA]">{NFTInfo?.documentName}</h6>
          <h6 className="md:text-xl md:mb-2">{NFTInfo?.documentType}</h6>
        </div>

        <Button onClick={() => handleNftDoubleClick(NFTInfo?.documentURI)} className="px-4 py-2 btn hover:bg-[#2B9DDA]">
          View
        </Button>
      </div>

      {fullscreenNftUrl && (
        <div onClick={handleCloseFullscreen} className="fixed inset-0 w-full h-full bg-[#5e5e5e] bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full mx-4 bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl">
          {NFTInfo.documentType === `${imageTypes[0]}` || NFTInfo.documentType === `${imageTypes[1]}` || NFTInfo.documentType === `${imageTypes[2]}` ? (
          <Image src={fullscreenNftUrl} alt="Fullscreen NFT" className="w-full h-auto object-contain max-h-[80vh]" height={10000} width={10000} />
        ) : (
          <iframe 
            src={NFTInfo?.documentURI} 
            title={NFTInfo?.documentName} 
            className="w-full h-full object-contain max-h-[80vh]" 
            height={10000} 
            width={10000} 
            frameBorder="1" 
            allowFullScreen
          ></iframe>
        )}


            <Button onClick={handleCloseFullscreen} aria-label="Close fullscreen view" className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 ease-in-out">
              <X size={24} />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NFTCard