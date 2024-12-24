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
    <div className="flex flex-col overflow-hidden pt-6 px-4 gap-4 w-full min-w-[327px]">
      <div className="flex gap-3 w-full min-h-[136px]">
        <div
          className="w-full bg-cover bg-top bg-no-repeat "
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <CloseIcon
          className="cursor-pointer"
          onClick={() => removeFromCart(id || "")}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold  uppercase text-neutral-500">BRAND</p>
        <span className="text-lg font-bold  text-customGray">{title}</span>
        <span className="text-base  text-customGray">{description} </span>
      </div>
      <span className="text-gray-900 font-semibold flex justify-end">
        ${price}
      </span>
    </div>
  );
}
