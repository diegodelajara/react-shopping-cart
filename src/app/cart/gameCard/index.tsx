"use client";
import { Game } from "@/app/api/games/route";
import React from "react";
import CloseIcon from "@/icons/close.svg";
import { useCart } from "@/Context.games";

export default function GameCard({
  id,
  title,
  price,
  image,
  description,
}: Game) {
  const { removeFromCart } = useCart();
  return (
    <div>
      <CloseIcon
        className="cursor-pointer"
        onClick={() => removeFromCart(id || "")}
      />
      <div
        className="w-full h-[136px] bg-cover bg-top bg-no-repeat "
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <p className="text-xl font-bold mb-2 uppercase text-neutral-500">
          BRAND
        </p>
        <div className="flex items-center">
          <span className="text-xl font-bold mb-2 text-customGray">
            {title}
          </span>
          <span className="text-xl font-bold mb-2 text-customGray">
            {description}
          </span>
          <span className="text-gray-900 font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
}
