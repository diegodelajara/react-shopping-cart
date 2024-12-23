import React from "react";
import LoadingCard from "./LoadingCard";
import Header from "@/components/Modules/Header";
export default function Loading() {
  return (
    <>
      <Header title={"GamerShop"} url={"/"} />
      <div className="p-4 space-y-4 container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-pulse">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </div>
    </>
  );
}
