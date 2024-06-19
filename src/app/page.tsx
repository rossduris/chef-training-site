import Image from "next/image";
import Hero from "./components/Hero";
import FeatureComponent from "./components/FeatureComponent";
import getStripeInstance from "../../utils/stripe";
import StripeProducts from "./components/StripeProducts";
import { getProducts } from "../../actions/actions";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <StripeProducts products={products} />
      <FeatureComponent />
    </main>
  );
}
