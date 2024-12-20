"use strict";
import React from "react";
import Image from "next/image";

type ItemProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function Item({ name, description, price, image }: ItemProps) {
  return (
    <div>
      <Image
        src={image}
        alt={description}
        layout="responsive"
        width={500}
        height={500}
      />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
