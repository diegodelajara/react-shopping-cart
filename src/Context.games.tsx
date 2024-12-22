import React, { createContext, useContext, useState, useEffect } from "react";
import { Game } from "./app/api/games/route";

type CartContextProps = {
  cart: Game[];
  addToCart: (game: Game) => void;
  removeFromCart: (id: string) => void;
  isGameInCart: (id: string) => boolean;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Game[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isGameInCart = (id: string) => {
    return cart.some((game) => game.id === id);
  };

  const addToCart = (game: Game) => {
    setCart((prevCart) => {
      // Verificar si el juego ya está en el carrito
      const isGameInCart = prevCart.some((item) => item.id === game.id);
      if (isGameInCart) {
        return prevCart; // Si el juego ya está en el carrito, no hacer nada
      }
      return [...prevCart, game]; // Agregar el juego al carrito
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isGameInCart }}
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
