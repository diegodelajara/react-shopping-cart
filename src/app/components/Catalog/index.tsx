import React from "react";
import Categories from "../Categories";
type CatalogProps = {
  title: string;
};
export default function Catalog({ title }: CatalogProps) {
  return (
    <div>
      {title}

      <Categories />
      <hr />
    </div>
  );
}
