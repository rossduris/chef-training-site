import React from "react";

const Hero = () => {
  return (
    <div className=" min-h-[600px] flex flex-col justify-around items-center">
      <h1 className=" text-6xl sm:text-7xl text-white font-bold mt-40 px-20 text-shadow">
        Culinary Mastery
      </h1>
      <span className=" text-shadow bookmark-font text-white my-10">With </span>
      <>
        <span className=" text-white text-[10em] text-shadow  signature-font leading-none text-center my-10">
          Raphael Savoureux
        </span>
      </>

      <span className=" text-white bookmark-font text-shadow text-2xl mt-10">
        Book Your Spot
      </span>
      <span className="book-now-button my-10">Book Now</span>
    </div>
  );
};

export default Hero;
