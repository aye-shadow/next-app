import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/_MainComponents/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" data-theme="dark">
        <head>
          <meta charSet="UTF-8" />
          <title>Ecommerce Website</title>
        </head>
        <body className="min-h-screen h-auto">
          <header>
            <Header />
          </header>
          <main className="px-16 py-8">{children}</main>
        </body>
      </html>
    </>
  );
}
