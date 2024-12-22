"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import Item from "../Item";

type CatalogProps = {
  title: string;
};

type Game = {
  id: string;
  genre: string;
  image: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
};

export default function Catalog({ title }: CatalogProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "All";

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("/api/games");
      const data = (await response.json()) as Game[];
      setGames(data);
      setFilteredGames(data);
    };

    fetchGames();
  }, []);

  useEffect(() => {
    if (genre === "All") {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter((game) => game.genre === genre));
    }
  }, [genre, games]);

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
            {filteredGames.map(({ id, name, genre, price, image }) => (
              <Item
                key={id}
                name={name}
                genre={genre}
                price={price}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
