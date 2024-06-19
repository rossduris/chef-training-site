import React from "react";
import { getStripeProducts } from "../../../actions/actions";

const StripeProducts = () => {
  const products = getStripeProducts();

  return <div>{JSON.stringify(products)}</div>;
};

export default StripeProducts;
