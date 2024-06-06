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
        <body>
          <Header />
          <main className="px-16 py-8">{children}</main>
        </body>
      </html>
    </>
  );
}
