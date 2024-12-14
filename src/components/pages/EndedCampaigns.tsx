'use client'

import CampaignCard from '@/components/CampaignCard'
import { useEndedCampaigns } from '@/hooks/read/useCampaigns'

const EndedCampaigns = () => {
  const allCampaigns = useEndedCampaigns()
  
  
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-6">
      {allCampaigns?.length ?
        allCampaigns?.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))
      :
        <article className="text-xl">No ended campaigns at the moment</article>
      }
    </div>
  )
}

export default EndedCampaigns