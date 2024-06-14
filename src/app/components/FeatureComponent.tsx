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
              observer.unobserve(featureDiv); // Stop observing once it's visible
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
    <div className=" flex flex-col bg-transparent p-1  w-full justify-center items-center text-center text-white max-w-7xl">
      <span ref={featureRefs[0]} className="">
        <span
          className={`${
            isVisible[0] ? "on-page" : "off-page"
          } flex flex-col justify-center items-center max-w-3xl gradient-bg p-20 w-full`}
        >
          <Image
            src="/chef.png"
            width={200}
            height={200}
            alt="chef"
            className="rounded-full"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            fugiat excepturi totam repudiandae, quo ad et accusamus, eligendi
            voluptatum nostrum delectus! In assumenda, aliquid inventore a earum
            necessitatibus laboriosam nisi?
          </p>
          <button className=" border p-4 rounded-full mt-8">Learn More</button>
        </span>
      </span>
      <span ref={featureRefs[1]} className="">
        <span
          className={`${
            isVisible[1] ? "on-page" : "off-page"
          } flex flex-col justify-center items-center max-w-3xl gradient-bg p-20 w-full`}
        >
          <Image
            src="/book.png"
            width={200}
            height={200}
            alt="book"
            className="rounded-full"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            fugiat excepturi totam repudiandae, quo ad et accusamus, eligendi
            voluptatum nostrum delectus! In assumenda, aliquid inventore a earum
            necessitatibus laboriosam nisi?
          </p>
          <button className=" border p-4 rounded-full mt-8">
            Buy The Book
          </button>
        </span>
      </span>
      <span ref={featureRefs[2]} className="">
        <span
          className={`${
            isVisible[2] ? "on-page" : "off-page"
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
      </span>
      {/* <span ref={featureRefs[3]} className="">
        <span
          className={`${
            isVisible[3] ? "on-page" : "off-page"
          } flex flex-col justify-center items-center max-w-3xl gradient-bg p-20 w-full`}
        >
          <Image
            src="/chef.png"
            width={200}
            height={200}
            alt="chef"
            className="rounded-full"
          />
        </span>
      </span> */}
    </div>
  );
};

export default FeatureComponent;
