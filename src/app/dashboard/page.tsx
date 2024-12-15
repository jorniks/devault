"use client"

import { useCallback, useEffect, useState } from "react"
import { useReadContract } from "@/hooks/read/useReadContract"
import { useAppContract } from "@/hooks/services/useContract"
import UploadAndMint from "../upload/page"
import NFTCard from "@/components/NFTCard"

const Dashboad = () => {
  const contract = useAppContract()
  const { getUserNFTs } = useReadContract()
  const [nfts, setNfts] = useState<[]>([]);
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

  return (
    <main className="h-screen overflow-hidden container pt-14">
      {/* All Documents Section */}
      <div className="md:flex justify-between items-center space-y-6">
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
            <NFTCard key={index} nftId={nft} />
          ))}
        </div>
      }
    </main>
  )
}

export default Dashboad