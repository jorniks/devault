"use client"

import { useCallback, useEffect, useState } from "react"
import { X } from "lucide-react"
import { NFTMetadata } from "@/types"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useReadContract } from "@/hooks/read/useReadContract"
import { useAppContract } from "@/hooks/services/useContract"
import UploadAndMint from "../upload/page"

const Dashboad = () => {
  const contract = useAppContract()
  const { getUserNFTs } = useReadContract()
  const [nfts, setNfts] = useState<NFTMetadata[]>([]);
  const [fullscreenNftUrl, setFullscreenNftUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(
    async () => {
      setLoading(true)
      
      getUserNFTs().then(userNFTs => {
        setNfts(userNFTs)
        setLoading(false)
      })
    }, [getUserNFTs]
  )

  useEffect(() => {
    loadData()

    contract?.on('DocumentStored', loadData)
  }, [contract, loadData]);

  const handleNftDoubleClick = (nftUrl: string) => {
    setFullscreenNftUrl(nftUrl)
    document.body.classList.add("overflow-hidden")
  }

  const handleCloseFullscreen = () => {
    setFullscreenNftUrl("")
    document.body.classList.remove("overflow-hidden")
  }

  return (
    <main className="h-screen overflow-hidden container pt-14">
      {/* All Documents Section */}
      <div className="md:flex justify-between items-start space-y-6">
        <div className='space-y-2'>
          <h2 className="text-3xl">My Bank</h2>
          <article className="">Here you can manage and track your documents.</article>
        </div>

        <UploadAndMint />
      </div>

      {loading ?
        <div className="w-full max-w-xl mx-auto my-auto space-y-4 pt-20 text-center">
          <h6 className="text-lg font-medium">Your NFTs are being fetched. Please wait while we process this transaction</h6>

          <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
            <div className="bg-[#2B9DDA] h-full rounded-full animate-indeterminate" />
          </div>
        </div>
      : !loading && nfts?.length === 0 ?
        <h6 className="text-center text-lg pt-20 text-white">You haven&apos;t minted an NFT yet.</h6>
      :
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5 xl:gap-8 rounded-xl border sm:border-white md;border-none overflow-x-auto p-5">
          {nfts?.map((nft, index) => (
            <div key={index} onDoubleClick={() => handleNftDoubleClick(nft?.documentURI)}
              className="flex flex-col gap-1 p-3 bg-[#1E1E1E] rounded-md cursor-pointer border border-[#2B9DDA] hover:bg-[#3f3f3f] hover:border-gray-900 transition-colors h-11/12"
            >
              <Image src={nft?.documentURI} alt={nft?.documentName} className="rounded-lg object-contain h-20 md:h-40 w-full" height={10000} width={10000} />

              <div className="text-start mt-2 ml-2 mb-2 ">
                <h6 className="md:text-xl md:mb-2">{nft?.documentURI}</h6>
                <h6 className="md:text-xs text-[#2B9DDA]">{nft?.documentName}</h6>
              </div>
              
              <Button onClick={() => handleNftDoubleClick(nft?.documentURI)} className="px-4 py-2 btn hover:bg-[#2B9DDA]">
                View
              </Button>
            </div>
          ))}
        </div>
      }

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
    </main>
  )
}

export default Dashboad