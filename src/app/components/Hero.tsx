import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="   flex flex-col justify-around items-center  lg:my-20 my-10 xl:mt-32">
      <h1 className=" text-6xl sm:text-7xl text-white font-bold sm:mt-32 my-10 pt-10 text-shadow">
        Culinary Mastery
      </h1>
      <span className=" text-shadow bookmark-font text-white my-2">With </span>
      <>
        <span className=" text-white text-[10em] text-shadow  signature-font leading-[120px] text-center my-10 ">
          Raphael Savoureux
        </span>
      </>

      <span className=" text-white bookmark-font text-shadow text-2xl mt-10">
        Book Your Spot Today
      </span>

      <span className="book-now-button my-10">
        <Link href="/book">Book Now</Link>
      </span>
    </div>
  );
};

export default Hero;
