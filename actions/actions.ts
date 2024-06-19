"use server";
import stripe from "../utils/stripe";

export const getProducts = async () => {
  const productData = await stripe.products.list();

  const products = productData.data as Product[];

  return products;
};
