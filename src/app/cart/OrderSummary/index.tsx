"use client";
import { useCart } from "@/Context.games";
import React from "react";

export default function OrderSummary() {
  const { getCartItems } = useCart();

  return (
    <div className="p-4 border border-gray-200 rounded-lg flex flex-col gap-11">
      <div className="flex flex-col gap-3">
        <span className="font-bold text-xl">OrderSummary</span>
        {getCartItems().length} item{getCartItems().length !== 1 ? "s" : ""}
      </div>
      <div className="flex flex-col gap-3">
        {getCartItems().map(({ id, title, price }) => (
          <div key={id} className="flex justify-between text-lg">
            <span className="">{title}</span>
            <span>{price}</span>
          </div>
        ))}
        <hr className="pb-6 mt-6" />
        <div className="flex justify-between text-2xl font-bold pb-8">
          <span>Order Total</span>
          <span>
            ${getCartItems().reduce((total, item) => total + item.price, 0)}
          </span>
        </div>
      </div>
    </div>
  );
}
