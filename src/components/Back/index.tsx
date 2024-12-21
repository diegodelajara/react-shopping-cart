"use client";
import React from "react";
import Link from "next/link";
import BackIcon from "../../icons/back.svg"; // Adjust the import path as necessary

export default function Back() {
  return (
    <div className="flex gap-1 w-full pt-4 pb-4">
      <div className="container mx-auto px-4 flex w-full">
        <BackIcon />
        <Link href={"/"} className="font-bold ">
          Back to the catalog
        </Link>
      </div>
    </div>
  );
}
