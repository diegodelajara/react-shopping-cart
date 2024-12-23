"use client";
import CatalogLayout from "@/components/Layouts/Catalog";
import Back from "@/components/Modules/Back";
import Header from "@/components/Modules/Header";
import { useCart } from "@/Context.games";
import React from "react";
import GameCard from "./gameCard";

export default function Cart() {
  const { getCartItems } = useCart();

  return (
    <>
      <Header title={"GamerShop"} url={"/"} />
      <Back />
      <CatalogLayout>
        {getCartItems().map(({ id, title, genre, price, image }) => (
          <div key={id}>
            <GameCard
              id={id}
              title={title}
              genre={genre}
              price={price}
              image={image}
            />
          </div>
        ))}
      </CatalogLayout>
    </>
  );
}
