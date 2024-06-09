"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartButton = () => {
  const item = useSelector((state: RootState) => state.cart);

  return (
    <Link
      href="/cart"
      className="cursor-pointer bg-black flex align-middle text-white px-7 rounded-xl pt-2 gap-2 text-sm mt-1"
    >
      <p>{item.length}</p>
      <ShoppingCart size={18} />
    </Link>
  );
};

export default CartButton;
