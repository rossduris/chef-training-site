"use client";
import React, { useEffect, useState } from "react";
import stripe from "../../../utils/stripe";
import Image from "next/image";

const StripeProducts = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product: Product) => {
        return (
          <Image
            src={product.images[0]}
            alt="chef product"
            width={200}
            height={200}
          />
        );
      })}
    </div>
  );
};

export default StripeProducts;
