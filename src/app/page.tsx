import NavBar from "@/components/navbar";

export default function Home() {
  
  return (
    <>
      <NavBar />

      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 max-w-4xl">
          Secure Your <span className="text-[#2B9DDA]">Documents</span> with
          <span className="text-[#2B9DDA]"> Blockchain</span> Technology
        </h1>
        
        <article className="mb-12 text-lg max-w-4xl mx-auto">
          Our platform offers decentralized, private, and immutable document storage, ensuring your data is safe and fully under your control.
        </article>

        <div className="flex gap-4">
          <button className="bg-[#FFFFFF] border-1 px-5 py-3 rounded-2xl text-black font-semibold">
            Get Started
          </button>

          <button className="border px-5 py-3 border-[#2B9DDA] rounded-2xl text-[#2B9DDA] font-semibold hover:bg-[#2B9DDA] hover:text-white">
            Learn More
          </button>
        </div>
      </main>
    </>
  );
}
