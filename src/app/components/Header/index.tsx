import Link from "next/link";
import React from "react";
import CartIcon from "../../../icons/cart.svg";
type HeaderProps = {
  title: string;
  url: string;
};

export default function Header({ title, url }: HeaderProps) {
  return (
    <div className="flex justify-between w-full">
      <Link href={url}>{title}</Link>
      <CartIcon />
    </div>
  );
}
