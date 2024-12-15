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
    <div className="container flex items-center justify-between bg-[#5e5e5e]/50 rounded-2xl py-4 px-6 z-10 sticky top-4">
      <Image src="/img/logo.png" alt="Databank" className="h-8 w-auto" height={10000} width={10000} />

      <div className="space-x-2 lg:space-x-6 font-semibold text-lg">
        {NavbarLinks.map((link, index) => (
          <Link key={index} href={`${link.href}`} className={`hover:text-[#2B9DDA] transition-colors tracking-wide duration-300 ${location === link.href && "text-[#2B9DDA]"}`}>
            {link.name}
          </Link>
        ))}
      </div>

      <WalletButton />
    </div>
  )
}

export default NavBar