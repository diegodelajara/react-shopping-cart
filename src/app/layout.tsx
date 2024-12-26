"use client";
import React from "react";
import "./globals.css";
import { CartProvider } from "@/Context.games";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist_Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
