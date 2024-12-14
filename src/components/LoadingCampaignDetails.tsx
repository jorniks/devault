
const LoadingCampaignDetails = () => {
  return (
    <section className="grid lg:grid-cols-6 lg:gap-x-8 xl:gap-x-12 lg:items-start justify-center animate-pulse">
      <aside className="lg:col-span-4 mt-10 lg:mt-0 space-y-4">
        <h1 className="bg-gray-700 rounded-md h-14"></h1>

        <div className="bg-gray-700 rounded-xl h-96"></div>

        <div className="space-y-6">
          <article className="mt-3 h-20 rounded-md bg-gray-700"></article>

          <div className="grid sm:grid-cols-2 gap-y-4">
            <div className="flex items-center gap-x-3">
              <div className="size-8 rounded-full bg-gray-700"></div>

              <div className="bg-gray-700 rounded h-6 w-44"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-gray-700 rounded-md h-8 w-8"></div>
              <div className="bg-gray-700 rounded h-6 w-44"></div>
            </div>
          </div>
        </div>
      </aside>

      <aside className="lg:col-span-2 pt-5 lg:pt-0">
        <div className="pt-8 space-y-10">
          <div className="space-y-2">
            <h3 className="bg-gray-700 rounded h-10"></h3>

            <div className="flex items-center gap-2 bg-gray-700 h-12 w-1/2"></div>

            <div className="bg-gray-700 rounded h-1.5 w-full"></div>
          </div>

          <div className="bg-gray-700 rounded h-14 w-full"></div>
        </div>

        <div className="mt-5 lg:mt-12 flex flex-col items-center gap-2 sm:gap-3">
          <div className="w-full bg-gray-700 h-14 rounded-md"></div>
          <div className="w-full bg-gray-700 h-14 rounded-md"></div>
        </div>
      </aside>
    </section>
  )
}

export default LoadingCampaignDetails