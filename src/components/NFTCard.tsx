import { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { NFTMetadata } from '@/types'
import { useReadContract } from '@/hooks/read/useReadContract'

const NFTCard = ({ nftId }: { nftId: number }) => {
  const [fullscreenNftUrl, setFullscreenNftUrl] = useState("");
  const [NFTInfo, setNFTInfo] = useState<NFTMetadata>(Object)
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
  
  
  return (
    <div className="">
      <div onDoubleClick={() => handleNftDoubleClick(NFTInfo?.documentURI)}
        className="flex flex-col gap-1 py-3 px-2 bg-[#2B9DDA]/40 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        <Image src={NFTInfo?.documentURI} alt={NFTInfo?.documentName} className="rounded-lg object-contain h-20 md:h-40 w-full" height={10000} width={10000} />

        <div className="text-start mt-2 ml-2 mb-2 ">
          <h6 className="">{NFTInfo?.documentName}</h6>
          <h6 className="md:text-xl md:mb-2">{NFTInfo?.documentType}</h6>
        </div>

        <Button onClick={() => handleNftDoubleClick(NFTInfo?.documentURI)} className="px-4 py-2 btn hover:bg-[#2B9DDA]">
          View
        </Button>
      </div>

      {fullscreenNftUrl && (
        <div onClick={handleCloseFullscreen} className="fixed inset-0 w-full h-full bg-[#5e5e5e] bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full mx-4 bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl">
            <Image src={fullscreenNftUrl} alt="Fullscreen NFT" className="w-full h-auto object-contain max-h-[80vh]" height={10000} width={10000} />

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