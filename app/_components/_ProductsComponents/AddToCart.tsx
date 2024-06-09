import React from "react";

const AddToCart = ({children}: any) => {
  return (
    <button
      className="btn w-full bg-black text-white thin hover:bg-zinc-800 duration-200 rounded-xl"
      style={{ fontSize: "0.7rem" }}
    >
      Add to Cart
      {children}
    </button>
  );
};

export default AddToCart;
