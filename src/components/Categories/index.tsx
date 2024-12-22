"use client";
import React from "react";

export default function Categories({
  handleSelectCategory,
}: {
  handleSelectCategory: (category: string) => void;
}) {
  const categories = ["All", "Battle Royale", "RPG", "Action"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    handleSelectCategory(selectedCategory);
  };

  return (
    <div>
      <span>Genre |</span>
      <select onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
