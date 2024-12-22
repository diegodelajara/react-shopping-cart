"use client";
import Link from "next/link";
import React from "react";
import CartIcon from "../../icons/cart.svg";
import { useCart } from "@/Context.games";

type HeaderProps = {
  title: string;
  url: string;
};

export default function Header({ title, url }: HeaderProps) {
  const { getCartCount } = useCart();

  return (
    <div className="flex min-h-[64px] bg-headerBg text-headerTitle items-center">
      <div className="container mx-auto px-4 flex justify-between w-full ">
        <Link href={url} className="font-bold text-2xl">
          {title}
        </Link>
        <div className="relative">
          <CartIcon />
          {getCartCount() ? (
            <span className="text-white font-bold text-xl absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
              {getCartCount()}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
