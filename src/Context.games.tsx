import React, { createContext, useContext, useState, useEffect } from "react";
import { Game } from "./app/api/games/route";

type CartContextProps = {
  cart: Game[];
  selectedFilter: string;
  getCartItems: () => Array<Game>;
  addToCart: (game: Game) => void;
  getCartCount: () => number | null;
  removeFromCart: (id: string) => void;
  isGameInCart: (id: string) => boolean;
  setSelectedFilter: (filter: string) => void;
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Game[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getCartItems = () => cart;
  const getCartCount = () => {
    return cart.length;
  };

  const isGameInCart = (id: string) => {
    return cart.some((game) => game.id === id);
  };

  const addToCart = (game: Game) => {
    setCart((prevCart) => {
      const isGameInCart = prevCart.some((item) => item.id === game.id);
      if (isGameInCart) {
        return prevCart;
      }
      return [...prevCart, game]; // Agregar el juego al carrito
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartItems,
        getCartCount,
        isGameInCart,
        removeFromCart,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
