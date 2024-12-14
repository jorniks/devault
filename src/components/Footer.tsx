import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container py-10 border-t border-white/20 text-center flex flex-col items-center gap-y-6">
      <Link href="/" className="text-gray-50 hover:text-lime-400 transition-colors duration-300">
        <Image width={1000} height={1000} src="/fundr.png" alt="fundr." className="w-auto h-8" />
      </Link>

      <div className="">
        <p className="font-medium">Join the <a href="#" className="outline-none border-b border-dotted text-lime-500">fundr community</a> and help bring dreams to life.</p>
        <article>&copy; fundr 2024, All rights reserved.</article>
      </div>

      <div className="space-x-6">
        <a href="https://t.me/jorniks" className="hover:text-lime-500 duration-200 outline-none" target="_blank" rel="noreferrer">
          <i className="text-2xl bi bi-telegram"></i>
        </a>

        <a href="https://github.com/jorniks/fundr" className="hover:text-lime-500 duration-200 outline-none" target="_blank" rel="noreferrer">
          <i className="text-2xl bi bi-github"></i>
        </a>

        <a href="https://linkedin.com/in/johnokeke" className="hover:text-lime-500 duration-200 outline-none" target="_blank" rel="noreferrer">
          <i className="text-2xl bi bi-linkedin"></i>
        </a>

        <a href="mailto:contact@fundr.com" className="hover:text-lime-500 duration-200 outline-none">
          <i className="text-2xl bi bi-envelope-fill"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer