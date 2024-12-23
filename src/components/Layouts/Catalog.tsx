import React from "react";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto px-2">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 xs:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
