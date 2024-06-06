import React from "react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import Categories from "./Categories";

const Header = () => {
  return (
    <nav className="flex justify-between bg-slate-00 relative py-4 px-16 pb-8">
      <span className="font-bold font-serif pt-4 cursor-pointer">
        Ecommerce
      </span>
      <ul className="flex gap-4 font-sans text-xs pt-4">
        {/*categories */}
        <Categories data={{ text: "Electronics" }}></Categories>
        <Categories data={{ text: "Mens Fashion" }}></Categories>
        <Categories data={{ text: "Women's Fashion" }}></Categories>
        <Categories data={{ text: "Jewelry" }}></Categories>
      </ul>

      {/* search bar */}
      <span className="flex align-middle flex-row rounded-xl min-w-64 border border-slate-300 pr-2 px-1 bg-white mt-1">
        <SearchBar />
        <Search size={18} className="mt-2" />
      </span>

      {/* shopping cart */}
      <span className="bg-black flex align-middle text-white px-7 rounded-xl pt-2 gap-2 text-sm mt-1">
        <p>0</p>
        <ShoppingCart size={18} />
      </span>
    </nav>
  );
};

export default Header;
