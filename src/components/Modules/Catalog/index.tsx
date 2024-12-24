"use client";
import React from "react";
import Categories from "../Categories";
import Item from "../Item";
import { Game } from "@/app/api/games/route";
import CatalogLayout from "@/components/Layouts/Catalog";

type CatalogProps = {
  title: string;
  filteredGames: Game[];
};

export default function Catalog({ title, filteredGames }: CatalogProps) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="container mx-auto px-4 w-full">
          {title}
          <div className="flex w-full lg:justify-end">
            <Categories />
          </div>
        </div>
      </div>
      <hr />
      <CatalogLayout>
        {filteredGames.map(
          ({ id, title, genre, price, image, description }) => (
            <div key={id}>
              <Item
                id={id}
                title={title}
                genre={genre}
                price={price}
                image={image}
                description={description}
              />
            </div>
          )
        )}
      </CatalogLayout>
    </div>
  );
}
