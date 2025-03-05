"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b-1 border-white sticky top-0 z-50 grad">
      <div className="font text-3xl">shortLinks</div>
      <ul className="flex gap-2 sm:gap-4 font-bold text-xs sm:text-lg">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/shorten"}>Generate</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
