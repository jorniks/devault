import Image from 'next/image'
import Link from 'next/link'

const HowItWorksComponent = () => {
  return (
    <section className="container max-w-7xl py-10 lg:pb-20 space-y-14">
      <div className="space-y-4 w-full max-w-3xl">
        <h2 className="">How to Launch Your Campaign on Fundr</h2>

        <article className="">
          Follow these straightforward steps to create and manage your campaign. From conceptualizing your idea to launching and tracking its success, Fundr makes it simple and transparent.
        </article>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
        <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
          <Image width={1000} height={1000} className="w-full object-cover object-center rounded-xl lg:h-[600px]" alt="Campaign Creation"
            src="https://media.istockphoto.com/id/874231466/photo/young-adult-woman-walking-up-the-stairs-with-sun-sport-background.jpg?s=612x612&w=0&k=20&c=6d2vtrEvMhXNSh8TFR5hVhW_A2ZKjvOhWQhg-yLW_wk="
          />
        </div>

        <div>
          <h3 className="mb-4 text-lime-400 text-xs font-medium uppercase">Steps</h3>

          <div className="flex gap-x-5 ms-1">
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-700 text-lime-400 font-semibold text-xs uppercase rounded-full">
                  1
                </span>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <article className="">
                <span className="text-white font-medium">Define Your Vision:</span>{" "} Clearly outline your campaign goals and what you want to achieve. Craft a compelling story that resonates with potential backers.
              </article>
            </div>
          </div>

          <div className="flex gap-x-5 ms-1">
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-700 text-lime-400 font-semibold text-xs uppercase rounded-full">
                  2
                </span>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <article className="">
                <span className="text-white font-medium">Set Up Your Campaign:</span>{" "} Create your campaign page on Fundr, including details like funding goals, rewards, and timelines. Upload visuals and provide compelling content to attract backers.
              </article>
            </div>
          </div>

          <div className="flex gap-x-5 ms-1">
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-700 text-lime-400 font-semibold text-xs uppercase rounded-full">
                  3
                </span>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <article className="">
                <span className="text-white font-medium">Promote Your Campaign:</span>{" "} Share your campaign across social media, engage with your community, and use marketing strategies to drive traffic and attract backers.
              </article>
            </div>
          </div>

          <div className="flex gap-x-5 ms-1">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-700 text-lime-400 font-semibold text-xs uppercase rounded-full">
                4
              </span>
            </div>

            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <article className="">
                <span className="text-white font-medium">Track and Engage:</span> Monitor your campaign&apos;s progress, interact with backers, and keep them updated on milestones and achievements.
              </article>
            </div>
          </div>

          <div className="flex justify-start md:mt-5">
            <Link href={"/create-campaign"} className="inline-flex items-center gap-x-3 btn lime p-1.5 ps-4">
              Create Campaign
              <span className="py-2 px-3 flex justify-center items-center gap-x-2 rounded-full bg-white/30 font-semibold text-white text-sm">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksComponent