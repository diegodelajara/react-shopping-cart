import Link from "next/link";
import React from "react";
import CartIcon from "../../icons/cart.svg";

type HeaderProps = {
  title: string;
  url: string;
};

export default async function Header({ title, url }: HeaderProps) {
  return (
    <div className="flex justify-between w-full bg-slate-300  min-h-[64px] items-center">
      <Link href={url} className="font-bold ">
        {title}
      </Link>
      <CartIcon />
    </div>
  );
}
