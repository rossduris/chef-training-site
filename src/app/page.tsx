import Image from "next/image";
import Hero from "./components/Hero";
import FeatureComponent from "./components/FeatureComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <div className="slate-fruit-hero">
        <div className="gradient-bg-absolute"></div>
      </div>
      <Hero />
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 bg-transparent p-1  w-full justify-center items-center text-center text-white">
        <FeatureComponent />
        <span className=" feature-span gradient-bg">
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
          <button>Buy The Book</button>
        </span>
        <span className="feature-span">
          <Image
            src="/students.png"
            width={400}
            height={400}
            alt="chef"
            className=" w-full object-fill"
          />
        </span>
        <span className="feature-span">
          <Image
            src="/chef.png"
            width={200}
            height={200}
            alt="students"
            className="rounded-full"
          />
        </span>
      </div>
    </main>
  );
}
