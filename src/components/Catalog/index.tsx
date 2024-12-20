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
      {title}

      <Categories />
      <hr />

      <div>
        {data.map(({ name, description, price, image }, key) => (
          <Item
            key={key}
            name={name}
            description={description}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
