"use client";
import { Game } from "@/app/api/games/route";
import { useCart } from "@/Context.games";
import React from "react";

export default function Item({ id, title, genre, price, image }: Game) {
  const { addToCart, isGameInCart, removeFromCart } = useCart();
  const handleAddToCart = (game: Game) => addToCart(game);

  return (
    <div className="flex flex-col border rounded-[theme(spacing.4)] overflow-hidden p-6 w-[327px] gap-4 md:w-[auto] lg:w-[327px]">
      <div
        className="w-full h-[240px] bg-cover bg-top bg-no-repeat rounded-t-[theme(spacing.4)]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <p className="text-xl font-bold mb-2 uppercase text-neutral-500">
          {genre}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold mb-2 text-customGray">
            {title}
          </span>
          <span className="text-gray-900 font-semibold">${price}</span>
        </div>
      </div>
      {isGameInCart(id!) ? (
        <button
          onClick={() => removeFromCart(id!)}
          className=" font-bold text-customGray uppercase flex w-full justify-center border rounded-[theme(spacing.2)] p-[20px] hover:bg-slate-50 "
        >
          remove
        </button>
      ) : (
        <button
          onClick={() => handleAddToCart({ id, title, genre, price, image })}
          className=" font-bold text-customGray uppercase flex w-full justify-center border rounded-[theme(spacing.2)] p-[20px] hover:bg-slate-50 "
        >
          add to cart
        </button>
      )}
    </div>
  );
}
