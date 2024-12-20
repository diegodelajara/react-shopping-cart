import React from "react";
import BackIcon from "../../../icons/back.svg";
import Link from "next/link";

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
