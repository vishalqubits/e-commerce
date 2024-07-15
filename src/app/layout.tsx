"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import NavigationBar from "@/components/global/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
