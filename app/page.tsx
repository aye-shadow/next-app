import Header from "../components/MainComponents/Header";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main className="px-16 py-8">
          <Products />
        </main>
      </body>
    </>
  );
}
