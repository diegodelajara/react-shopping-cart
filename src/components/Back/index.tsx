"use client";
import React from "react";
import Link from "next/link";
import BackIcon from "../../icons/back.svg"; // Adjust the import path as necessary

export default function Back() {
  return (
    <div className="flex gap-1 w-full ">
      <BackIcon />
      <Link href={"/"} className="font-bold ">
        Back to the catalog
      </Link>
    </div>
  );
}
