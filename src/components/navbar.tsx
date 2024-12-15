"use client";

import Link from 'next/link'
import React from 'react'
import WalletButton from './WalletButtons'
import Image from 'next/image'

const NavBar = () => {
  
  return (
    <div className="container flex items-center justify-between bg-[#5e5e5e]/50 rounded-2xl py-3 px-4 z-10 sticky top-4">
      <Link href="/" className="">
        <Image src="/img/logo.png" alt="Databank" className="h-10 w-auto" height={10000} width={10000} />
      </Link>

      <WalletButton />
    </div>
  )
}

export default NavBar