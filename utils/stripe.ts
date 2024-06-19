import Stripe from "stripe";

// Load environment variables
const stripeSecretKey = process.env.STRIPE_PRIVATE_KEY as string;

// Initialize Stripe with your secret key
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});

export default stripe;
