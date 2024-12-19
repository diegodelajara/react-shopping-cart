import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainLayoutProps) {
  return <div>{children}</div>;
}
