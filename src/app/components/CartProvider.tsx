"use client";
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage"; // Adjust the path as necessary

type CartItem = {
  id: string;
  name: string;
  price: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "INITIALIZE"; items: CartItem[] };

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addItem: (name: string, price: number) => void;
  removeItem: (id: string) => void;
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, items: action.items };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [storedCart, setStoredCart] = useLocalStorage("cart", initialState);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load initial state from local storage on client side
  useEffect(() => {
    if (storedCart.items.length > 0) {
      dispatch({ type: "INITIALIZE", items: storedCart.items });
    }
  }, []);

  useEffect(() => {
    setStoredCart(state);
  }, [state]);

  const addItem = (name: string, price: number) => {
    const newItem = { id: uuidv4(), name, price };
    dispatch({ type: "ADD_ITEM", item: newItem });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, addItem, removeItem, items: state.items }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return ctx;
};
