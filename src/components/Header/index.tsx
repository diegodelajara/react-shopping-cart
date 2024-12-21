import Link from "next/link";
import React from "react";
import CartIcon from "../../icons/cart.svg";

type HeaderProps = {
  title: string;
  url: string;
};

export default async function Header({ title, url }: HeaderProps) {
  return (
    <div className="flex min-h-[64px] bg-headerBg text-headerTitle items-center">
      <div className="container mx-auto px-4 flex justify-between w-full ">
        <Link href={url} className="font-bold text-2xl">
          {title}
        </Link>
        <CartIcon />
      </div>
    </div>
  );
}
