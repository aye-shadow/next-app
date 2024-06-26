"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectTotalItems } from "@/redux/cartSlice";

const CartButton = () => {
  const item = useSelector((state: RootState) => state.cart);
  const totalItems = useSelector(selectTotalItems);

  return (
    <Link href="/cart">
      <button className="bg-black flex flex-row align-middle text-white px-7 rounded-xl pt-2 gap-2 text-sm mt-1 h-full hover:bg-zinc-800 duration-200">
        <p>{totalItems}</p>
        <ShoppingCart size={18} />
      </button>
    </Link>
  );
};

export default CartButton;
