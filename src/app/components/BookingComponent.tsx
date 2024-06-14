"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartProvider";

const BookingComponent = () => {
  const [trainingPackage, setTrainingPackage] = useState("");
  const [demoData, setDemoData] = useState<JSON>();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const savedPackage = localStorage.getItem("trainingPackage");
    if (savedPackage) {
      console.log("setting saved package");
      setTrainingPackage(savedPackage);
    }

    const getDemoData = async () => {
      const data = await fetch("/demo.json");
      const json = await data.json();
      setDemoData(json);
    };
    getDemoData();
  }, []);

  useEffect(() => {
    // Save training package to local storage whenever it changes
    localStorage.setItem("trainingPackage", trainingPackage);
  }, [trainingPackage]);

  return (
    <div className="flex flex-col justify-around items-center bg-slate-700   chef-bg p-8 overflow-hidden">
      <h1 className="text-6xl sm:text-7xl text-white font-bold mt-32 text-shadow mb-8">
        Book Your Spot
      </h1>
      {JSON.stringify(demoData)}
      <div>
        <section className=" grid grid-cols-3 gap-4">
          <span
            onClick={() => setTrainingPackage("BASIC")}
            className={` ${
              trainingPackage === "BASIC" ? "bg-[#8e8e8e]" : "bg-[#f2f2f2]"
            } rounded-md p-2 shadow-lg border border-white`}
          >
            CHOOSE PACKAGE {JSON.stringify(cart)}
          </span>
          <span
            onClick={() => setTrainingPackage("INTERMEDIATE")}
            className={` ${
              trainingPackage === "INTERMEDIATE"
                ? "bg-[#8e8e8e]"
                : "bg-[#f2f2f2]"
            } rounded-md p-2 shadow-lg border border-white`}
          >
            CHOOSE PACKAGE {JSON.stringify(cart)}
          </span>
          <span
            onClick={() => setTrainingPackage("ADVANCED")}
            className={` ${
              trainingPackage === "ADVANCED" ? "bg-[#8e8e8e]" : "bg-[#f2f2f2]"
            } rounded-md p-2 shadow-lg border border-white`}
          >
            CHOOSE PACKAGE {JSON.stringify(cart)}
          </span>
        </section>
      </div>
      <form className="booking-form bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <div className="bottom-fade mt-8"></div>
    </div>
  );
};

export default BookingComponent;
