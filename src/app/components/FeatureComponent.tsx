"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FeatureComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const featureRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  useEffect(() => {
    const observers = featureRefs.map((ref, index) => {
      const featureDiv = ref.current;
      if (!featureDiv) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              // observer.unobserve(featureDiv); // Stop observing once it's visible
            }
          });
        },
        {
          threshold: 0.4, // Adjust this value to trigger earlier or later
        }
      );

      observer.observe(featureDiv);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && (featureRefs[index].current as HTMLSpanElement)) {
          observer.unobserve(featureRefs[index].current as HTMLSpanElement);
        }
      });
    };
  }, []);

  return (
    <div className=" flex flex-col bg-transparent w-full justify-center items-center text-center text-white max-w-7xl">
      <span ref={featureRefs[0]} className="">
        <span
          className={`${
            isVisible[0] ? "on-page" : "off-page"
          } flex flex-col md:flex-row justify-center items-center  gradient-bg rounded-sm  w-full  shadow-lg  `}
        >
          <span
            className={`${
              isVisible[0] ? "on-page2" : "off-page"
            } m-10  order-2 sm:order-1 text-left items-end`}
          >
            <p className=" max-w-60">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque fugiat excepturi totam repudiandae, quo ad et
              accusamus, eligendi voluptatum nostrum delectus! In assumenda,
              aliquid inventore a earum necessitatibus laboriosam nisi?
            </p>
            <button className=" border p-4 rounded-full mt-8">
              Learn More
            </button>
          </span>
          <Image
            src="/chef-cutout.png"
            width={500}
            height={500}
            alt="chef"
            className={`${
              isVisible[0] ? "on-page" : "off-page"
            }  m-10 w-[auto] max-h-[500px]`}
          />
        </span>
      </span>

      {/* <span ref={featureRefs[2]} className="">
        <span
          className={`${
            isVisible[2] ? "on-page3" : "off-page3"
          } flex flex-col justify-center items-center max-w-3xl gradient-bg p-20 w-full`}
        >
          <Image
            src="/students.png"
            width={400}
            height={400}
            alt="students"
            className=" w-full object-fill"
          />
        </span>
        <span>Review Section</span>
      </span> */}
      <span ref={featureRefs[3]} className="w-full">
        <span
          className={`   flex justify-around w-full flex-col items-center relative`}
        >
          <Image
            src="/salt.png"
            width={200}
            height={200}
            alt="chef"
            className={`rounded-full bg-transparent  ${
              isVisible[3] ? "on-page4" : "off-page-right"
            }`}
          />
          <Image
            src="/spice.png"
            width={200}
            height={200}
            alt="chef"
            className={`rounded-full bg-transparent  ${
              isVisible[3] ? "on-page3" : "off-page3"
            }`}
          />
          <Image
            src="/knife.png"
            width={500}
            height={200}
            alt="chef"
            className={`rounded-full bg-transparent  ${
              isVisible[3] ? "on-page3" : "off-page3"
            }`}
          />
          <div className=" absolute top-32 right-0">
            <Image
              src="/ingredients.png"
              width={900}
              height={200}
              alt="chef"
              className={`rounded-full bg-transparent  ${
                isVisible[3] ? "on-page3" : "off-page3"
              }`}
            />
          </div>
        </span>
      </span>
      {/* <span className=" bg-white flex w-full h-[500px]">
        <h3 className=" text-black text-center w-full text-4xl bookmark-font m-10">
          Proven Techniques
        </h3>
      </span> */}
      <span ref={featureRefs[1]} className="">
        <span
          className={`${
            isVisible[1] ? "on-page" : "off-page"
          } flex flex-col justify-center items-center max-w-3xl gradient-bg p-20 w-full`}
        >
          <Image
            src="/students.png"
            width={600}
            height={200}
            alt="book"
            className="rounded-lg m-10"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            fugiat excepturi totam repudiandae, quo ad et accusamus, eligendi
            voluptatum nostrum delectus! In assumenda, aliquid inventore a earum
            necessitatibus laboriosam nisi?
          </p>
          <button className=" border p-4 rounded-full mt-8">
            Loved By the Best
          </button>
        </span>
      </span>
    </div>
  );
};

export default FeatureComponent;
