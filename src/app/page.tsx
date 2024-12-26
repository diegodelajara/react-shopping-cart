import React from "react";
import Header from "../components/Modules/Games/Header";
import Catalog from "../components/Modules/Games/Catalog";
import { Game } from "./api/games/route";
import Footer from "@/components/Modules/Games/Footer";

const wait3Seconds = () => new Promise((resolve) => setTimeout(resolve, 3000));

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { genre } = await searchParams;
  if (!genre) {
    await wait3Seconds();
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/?genre=${genre || "All"}`
  );
  const data = (await response.json()) as Game[];

  return (
    <div className="grid grid-rows-[1fr] ">
      <Header title={"GamerShop"} url={"/"} />
      <Catalog title={"TOP SELLERS"} filteredGames={data} />
      <Footer />
    </div>
  );
}
