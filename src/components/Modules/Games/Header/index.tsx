"use client";
import Link from "next/link";
import React from "react";
import CartIcon from "@/icons/cart.svg";
import { useCart } from "@/Context.games";

type HeaderProps = {
  title: string;
  url: string;
};

export default function Header({ title, url }: HeaderProps) {
  const { getCartCount } = useCart();

  return (
    <div className="flex min-h-[64px] bg-headerBg text-darkGray items-center">
      <div className="container mx-auto px-4 flex justify-between w-full ">
        <Link href={url} className="font-bold text-2xl">
          {title}
        </Link>
        <div className="relative">
          <Link href={"/cart"}>
            <CartIcon />
            {getCartCount() ? (
              <span className="text-white font-bold text-sm absolute -top-2 -right-2 bg-sky-700 rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
}
