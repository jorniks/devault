"use client"

import { useActiveCampaigns } from "@/hooks/read/useCampaigns"
import CampaignCard from "./CampaignCard"


const CampaignsSection = () => {
  const campaigns = useActiveCampaigns()

  return (
    campaigns &&
      <section className="container space-y-14">
        <aside className="max-w-3xl mx-auto text-center space-y-2 md:space-y-4">
          <h2 className="">Explore Live Campaigns</h2>

          <article className="">
            Find and Back Campaigns That Need Your Help Now—Explore a wide range of live projects where your contribution can make a real difference.
          </article>
        </aside>

        <aside className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns?.slice(0, 3).map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} />
          ))}
        </aside>

        <aside className="mt-12 text-center">
          <a href="/campaigns" className="inline-flex items-center bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none">
            <p className="me-2 text-white text-sm">Explore more live Campaigns</p>
            <span className="py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
              <i className="bi  bi-arrow-up-right"></i>
            </span>
          </a>
        </aside>
      </section>
  )
}

export default CampaignsSection