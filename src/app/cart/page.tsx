"use client";
import Back from "@/components/Modules/Games/Back";
import Header from "@/components/Modules/Games/Header";
import { useCart } from "@/Context.games";
import React, { Fragment } from "react";
import GameCard from "./gameCard";
import OrderSummary from "./OrderSummary";
import Footer from "@/components/Modules/Games/Footer";

export default function Cart() {
  const { getCartItems } = useCart();

  return (
    <>
      <Header title={"GamerShop"} url={"/"} />
      <Back />
      <div className="flex justify-start text-3xl font-bold p-6 text-customGray">
        Your Cart
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        <div>
          {getCartItems().length
            ? getCartItems().map(
                ({ id, title, price, image, description }, index) => (
                  <Fragment key={id}>
                    <div>
                      <GameCard
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                        description={description}
                      />

                      {index !== getCartItems().length - 1 ? <hr /> : null}
                    </div>
                  </Fragment>
                )
              )
            : "No items in cart"}
        </div>
        <div>
          <OrderSummary />
          <button
            className="bg-darkGray mt-8 w-full text-white pt-5 pb-5 font-bold text-base rounded-lg"
            disabled={!getCartItems().length}
          >
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
