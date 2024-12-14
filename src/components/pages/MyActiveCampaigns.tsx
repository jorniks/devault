'use client'

import CampaignCard from '@/components/CampaignCard'
import { useMyActiveCampaigns } from '@/hooks/read/useCampaigns'

const MyActiveCampaigns = () => {
  const allCampaigns = useMyActiveCampaigns()


  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-6">
      {allCampaigns?.length ?
        allCampaigns?.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))
      :
        <div className="text-center space-y-3 sm:col-span-3">
          <i className="bi bi-emoji-frown-fill text-3xl"></i>
          <h2 className="text-xl">No Campaigns Available</h2>
          <article className="">You haven&apos;t created any campaigns yet. Start by creating your first campaign to see it listed here!</article>
        </div>
      }
    </div>
  )
}

export default MyActiveCampaigns