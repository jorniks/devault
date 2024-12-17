"use client";


import Link from "next/link";
import React, { useState, useEffect } from "react";
import WalletButton from "./WalletButtons";
import Image from "next/image";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set state when scrolled past 50px
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`container flex items-center justify-between rounded-2xl py-3 px-4 z-10 sticky top-4 transition-all duration-300 ${
        isScrolled ? "bg-[#010A1A] shadow-md w-full z-20" : "bg-transparent"
      }`}
    >
      <Link href="/" className="">
        <Image
          src="/img/logo.png"
          alt="Databank"
          className="h-10 w-auto"
          height={10000}
          width={10000}
        />
      </Link>

      <WalletButton />
    </div>
  );
};

export default NavBar;

