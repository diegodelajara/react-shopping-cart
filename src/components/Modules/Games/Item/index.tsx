"use client";
import { Game } from "@/app/api/games/route";
import { useCart } from "@/Context.games";
import React, { useState } from "react";

export default function Item({
  id,
  title,
  genre,
  price,
  image,
  isNew,
  description,
}: Game) {
  const { addToCart, isGameInCart, removeFromCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleAddToCart = (game: Game) => {
    addToCart(game);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col border rounded-[theme(spacing.4)] overflow-hidden p-6 w-[327px] gap-4 md:w-[auto] lg:w-[327px]">
      <div
        className="w-full h-[240px] bg-cover bg-top bg-no-repeat rounded-t-[theme(spacing.4)] pt-4 pl-3"
        style={{ backgroundImage: `url(${image})` }}
      >
        {isNew && (
          <span className="p-2 bg-white text-darkGray rounded-md"> New</span>
        )}
      </div>
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
        <button
          onClick={handleToggleShowMore}
          className="text-sm text-blue-500 hover:underline"
        >
          {showMore ? "see less" : "see more"}
        </button>
        {showMore && (
          <div className="mt-2">
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        )}
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
          onClick={() =>
            handleAddToCart({ id, title, genre, price, image, description })
          }
          className=" font-bold text-customGray uppercase flex w-full justify-center border rounded-[theme(spacing.2)] p-[20px] hover:bg-slate-50 "
        >
          add to cart
        </button>
      )}
      {isAnimating && (
        <div className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded-full animate-ping">
          Added!
        </div>
      )}
    </div>
  );
}
