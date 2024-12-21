import React from "react";
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
export default async function Catalog({ title }: CatalogProps) {
  const response = await fetch("http://localhost:3000/api/games");
  const data = (await response.json()) as Game[];
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
      <div className="container mx-auto px-2">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 xs:p-6">
            {data.map(({ name, genre, price, image }, key) => (
              <Item
                key={key}
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
