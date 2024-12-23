"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/Context.games";

export default function Categories() {
  const router = useRouter();
  const { setSelectedFilter } = useCart();

  const categories = ["All", "Battle Royale", "RPG", "Action"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    router.push(`http://localhost:3000?genre=${selectedCategory}`);
    setSelectedFilter(selectedCategory);
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
