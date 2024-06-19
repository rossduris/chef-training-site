"use server";

import stripe from "../utils/stripe";

export const getStripeProducts = async () => {
  const products = await stripe.products.list();

  return products;
};
