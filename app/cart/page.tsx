import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <h2 className="font-bold font-sans text-lg mb-10">Your Cart</h2>

      <div
        className="card w-fill min-h-36 bg-white grid grid-cols-4 grid-flow-row font-sans"
        style={{ boxShadow: "5px 10px 20px rgb(0 0 0 / 0.1)" }}
      >
        <img></img>
        <h2 className="font-semibold">Test Product</h2>
        <h2 className="font-semibold">$20</h2>
        <div className="text-inherit">
          <button>
            <Minus />
          </button>
          Quantity
          <button>
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
