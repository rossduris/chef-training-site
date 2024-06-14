import Image from "next/image";
import Hero from "./components/Hero";
import FeatureComponent from "./components/FeatureComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <FeatureComponent />
    </main>
  );
}
