'use client'

import WalletButton from '@/components/WalletButtons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const features = [
    {
      title: "Secure Document Upload",
      description:
        "Upload your document, and it is automatically converted into a secure NFT on the blockchain. This ensures ownership, authenticity, and protection from tampering.",
    },
    {
      title: "Document management",
      description:
        "Manage your documents seamlessly through an intuitive dashboard. View, organize, and retrieve your files effortlessly in one place.",
    },
    {
      title: "share and verify",
      description:
        "Generate secure shareable links or QR codes to provide access to specific documents. This enables a quick and reliable third-party verification process.",
    },
    {
      title: "Privacy and access control",
      description:
        "Take full control of your documents with advanced privacy settings. Decide who can view, access, or verify your files, ensuring complete data privacy at all times.",
    },
  ]

  const FeatureCard = ({ feature, index }: { feature: { title: string; description: string }; index: number }) => {//+
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative overflow-hidden border border-gray-800 bg-gray-900/50 p-6 rounded-2xl transition duration-500 group-hover:opacity-100 shadow-[0_-4px_8px_0_rgba(59,130,246,0.2),4px_0_8px_0_rgba(59,130,246,0.2),-4px_0_8px_0_rgba(59,130,246,0.2)]"
      >
        <div className="relative z-10">
          <h3 className="mb-2 text-3xl text-white">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <main>
      <section className="md:h-screen flex flex-col items-center text-center scroll-smooth">
        <h1 className="text-3xl md:text-4xl lg:text-7xl mb-4 max-w-4xl mt-10 lg:mt-28 bg-gradient-to-b from-[#ECECEC] to-[#0a508a] bg-clip-text text-transparent p-2">
          Secure Your Documents <br className="hidden lg:block" /> with Blockchain Technology
        </h1>

        <article className="mb-12 text-lg max-w-xl mx-auto text-gray-300">
          Our platform offers decentralized, private, and immutable document storage, ensuring your data is safe and fully under your control.
        </article>

        <div className="flex gap-4">

          <WalletButton />
          <button className="border px-5 py-3 border-[#2B9DDA] rounded-2xl text-[#2B9DDA] font-semibold hover:bg-[#2B9DDA] hover:text-white">
            <a href="#features">Learn More</a>
          </button>
        </div>
      </section>

      {/* features section */}
      <section id="features" className="md:px-16 scroll-smooth">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center relative"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[400px] bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="relative">
            <h2 className="text-3xl tracking-tight text-white sm:text-4xl">
              Unlock the Future of Data
              <span className="block">Storage With Davault</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Upload documents, convert them to secure NFTs, and manage,
              <span className="block">share or verify with privacy control.</span>
            </p>
          </div>
        </motion.div>
        
        <div className="container flex items-center justify-center">
          <div className="grid gap-10 p-12 max-w-5xl md:grid-cols-2 items-center justify-center ">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/*About us  */}
      <section className="py-5" id="about-us">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl p-10 text-center shadow-[0_-4px_8px_0_rgba(59,130,246,0.2),4px_0_8px_0_rgba(59,130,246,0.2),-4px_0_8px_0_rgba(59,130,246,0.2)]"
          >
            <h2 className="text-3xl font-bold text-white">About us</h2>
            <p className="mt-4 text-gray-400">
              Davault leverages block chain technology to provide secure, decentralised and
              transparent data storage. our mission is to give individuals and businesses greater
              control over their data while ensuring privacy, efficiency, and scalability. Join us in
              shaping the future of secure, sustainable data storage.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

