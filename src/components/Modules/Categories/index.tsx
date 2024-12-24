"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/Context.games";

export default function Categories() {
  const genre = useSearchParams().get("genre") || "All";
  const router = useRouter();
  const { setSelectedFilter } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Battle Royale", "RPG", "Action"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    router.push(`http://localhost:3000?genre=${selectedCategory}`);
    setSelectedFilter(selectedCategory);
  };

  useEffect(() => {
    setSelectedCategory(genre);
    setSelectedFilter(genre);
  }, [genre, setSelectedFilter]);

  return (
    <div>
      <span>Genre |</span>
      <select value={genre} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
