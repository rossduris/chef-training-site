"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Bars3Icon, BeakerIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add("scrolling");
    } else {
      header.classList.remove("scrolling");
    }
    const handleScroll = () => {
      // console.log(window.scrollX);
      console.log(window.scrollY);
      if (window.scrollY > 30) {
        header.classList.add("scrolling");
      } else {
        header.classList.remove("scrolling");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className=" normal z-10 ">
      <span className="logo">
        {" "}
        <span className=" text-white text-[2em] font-thin text-shadow  signature-font   text-center ">
          Raphael Savoureux
        </span>
      </span>
      <nav className="menu">
        <Link href="/">Home</Link>
        <Link href="/">Test</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Menu</Link>
      </nav>
      <nav className="flex sm:hidden">
        <Bars3Icon className="size-8 text-white font-bold cursor-pointer" />
      </nav>
    </header>
  );
};

export default Header;
