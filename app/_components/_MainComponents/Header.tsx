import React from "react";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between bg-slate-00 relative py-4 px-16 pb-8">
        <Link href="../" className="font-bold font-serif pt-4 cursor-pointer">
          Ecommerce
        </Link>
        <Categories />

        {/* search bar */}
        <span className="flex align-middle flex-row rounded-xl min-w-64 border border-slate-300 pr-2 px-1 bg-white mt-1">
          <SearchBar />
        </span>

        {/* shopping cart */}
        <Link
          href="/cart"
          className="cursor-pointer bg-black flex align-middle text-white px-7 rounded-xl pt-2 gap-2 text-sm mt-1"
        >
          <p>0</p>
          <ShoppingCart size={18} />
        </Link>
      </nav>
    </>
  );
};

export default Header;
