"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FeatureComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const featureDiv = featureRef.current;
    if (!featureDiv) return;

    const handleScroll = () => {
      if (!loaded && window.scrollY > 50) {
        setLoaded(true);
        featureDiv.classList.add("on-page");
        featureDiv.classList.remove("off-page");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to apply the class based on the initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <span ref={featureRef} className="feature-span gradient-bg off-page">
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
      <button>Learn More</button>
    </span>
  );
};

export default FeatureComponent;
