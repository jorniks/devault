'use client'

import CampaignCard from '@/components/CampaignCard'
import { useActiveCampaigns } from '@/hooks/read/useCampaigns'

const ActiveCampaigns = () => {
  const allCampaigns = useActiveCampaigns()


  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-6">
      {allCampaigns?.length ?
        allCampaigns?.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))
      :
        <article className="text-xl">No active campaigns at the moment</article>
      }
    </div>
  )
}

export default ActiveCampaigns