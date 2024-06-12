import React from "react";

const Hero = () => {
  return (
    <div className=" min-h-[600px] flex flex-col justify-around items-center">
      <h1 className=" text-6xl sm:text-7xl text-white font-bold mt-40 px-20 text-shadow">
        Chef Training
      </h1>
      <span className=" text-shadow bookmark-font text-white">With </span>
      <span className=" text-white text-3xl text-shadow -mt-10">
        Chef Raphael Savoureux
      </span>
      <span className=" text-white bookmark-font text-shadow text-2xl">
        Book Your Spot
      </span>
      <button className=" bg-white text-black rounded-md p-3 cursor-pointer hover:bg-slate-300">
        Book Now
      </button>
    </div>
  );
};

export default Hero;
