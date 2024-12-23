"use client";
import React from "react";

export default function LoadingCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-40 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-2/4"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  );
}
