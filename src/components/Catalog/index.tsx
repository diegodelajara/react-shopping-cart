"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Categories from "../Categories";
import Item from "../Item";
import { Game } from "@/app/api/games/route";

type CatalogProps = {
  title: string;
  filteredGames: Game[];
};

export default function Catalog({ title, filteredGames }: CatalogProps) {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center">
        <div className="container mx-auto px-4 w-full">
          {title}
          <div className="flex w-full lg:justify-end">
            <Categories
              handleSelectCategory={(category) =>
                router.push(`/?genre=${category}`)
              }
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="container mx-auto px-2">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 xs:p-6">
            {filteredGames.map(({ id, title, genre, price, image }) => (
              <div key={id}>
                <Item
                  id={id}
                  title={title}
                  genre={genre}
                  price={price}
                  image={image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
