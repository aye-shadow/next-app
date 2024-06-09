"use client";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/redux/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface AddToCartProps {
  product: Product;
  children?: ReactNode;
}

const AddToCartButton = ({ product, children }: AddToCartProps) => {
  const dispatch = useDispatch();
  const handleAdd = (product: Product) => {
    const cartItem: CartItem = { ...product, quantity: 1 }; // Default quantity to 1
    dispatch(add(cartItem));
  };

  return (
    <button
      className="btn w-full bg-black text-white thin hover:bg-zinc-800 duration-200 rounded-xl"
      style={{ fontSize: "0.7rem" }}
      onClick={() => handleAdd(product)}
    >
      Add to Cart
      {children}
    </button>
  );
};

export default AddToCartButton;
