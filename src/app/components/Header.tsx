"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const handleScroll = () => {
      // console.log(window.scrollX);
      console.log(window.scrollY);
      if (window.scrollY > 100) {
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
    <header ref={headerRef} className=" normal">
      <span className="logo">Logo</span>
      <nav className="menu">
        <Link href="/">Home</Link>
        <Link href="/">Test</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Menu</Link>
      </nav>
      <nav className="flex sm:hidden">Mobile Nav</nav>
    </header>
  );
};

export default Header;
