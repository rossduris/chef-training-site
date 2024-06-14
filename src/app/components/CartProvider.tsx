"use client";
import React, { useState, createContext, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [{ id: 1, name: "bag" }],
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([{ id: 1, name: "bag" }]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
