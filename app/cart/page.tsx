"use client";
import { Minus, Plus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <h2 className="font-bold font-sans text-lg mb-10">Your Cart</h2>

      <div
        className="card w-fill h-36 bg-white flex flex-row justify-between font-sans overflow-hidden items-center px-10"
        style={{ boxShadow: "5px 10px 20px rgb(0 0 0 / 0.1)" }}
      >
        <img></img>
        <h2 className="font-semibold h-fit">Test Product</h2>
        <h2 className="font-semibold h-fit">$20</h2>
        <div className="text-inherit flex gap-4 h-fit">
          <button
            className="bg-slate-950 rounded-md text-white w-fit h-fit"
            style={{ padding: "0.25rem 0.4rem" }}
          >
            <Minus size={13} />
          </button>
          <div className="text-sm">{1}</div>
          <button
            className="bg-slate-950 rounded-md text-white w-fit h-fit"
            style={{ padding: "0.25rem 0.4rem" }}
          >
            <Plus size={13} />
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
