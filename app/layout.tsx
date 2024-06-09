import "./globals.css";
import Header from "./_components/_MainComponents/Header";
import { ReactNode } from "react";
import OurProvider from "@/redux/ourProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" data-theme="dark">
        <head>
          <meta charSet="UTF-8" />
          <title>Ecommerce Website</title>
        </head>
        <body className="min-h-screen h-auto">
          <OurProvider>
            <header>
              <Header />
            </header>
            <main className="px-16 py-8">{children}</main>
          </OurProvider>
        </body>
      </html>
    </>
  );
}
