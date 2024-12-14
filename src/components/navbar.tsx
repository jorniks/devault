"use client";

import Link from 'next/link'
import React from 'react'
import WalletButton from './WalletButtons'
import Image from 'next/image'
import { usePathname } from "next/navigation";

const NavbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "How it works",
    href: "/how-it-works",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
];

const NavBar = () => {
  const location = usePathname();
  
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto items-center bg-[#5e5e5e] bg-opacity-50 rounded-2xl py-4 px-6 mt-3 text-white z-10">
      <div className="col-span-6 md:col-span-4 flex justify-start">
        <Image src="/img/logo.png" alt="Databank" className="h-8 w-auto" height={10000} width={10000} />
      </div>

      <div className="hidden md:col-span-4 md:flex justify-center md:space-x-2 lg:space-x-6 font-semibold text-lg">
        {NavbarLinks.map((link, index) => (
          <Link key={index} href={`${link.href}`} className={`hover:text-[#2B9DDA] transition-colors tracking-wide duration-300 ${location === link.href && "text-[#2B9DDA]"}`}>
            {link.name}
          </Link>
        ))}
      </div>


      <div className="col-span-6 md:col-span-4 flex justify-end">
        <WalletButton />
      </div>
    </div>
  )
}

export default NavBar