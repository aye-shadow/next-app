"use client";

import { Minus, Plus } from "lucide-react";
import React from "react";
import { remove, add, selectTotalPrice } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem } from "@/redux/cartSlice";

const page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemove = (id: number) => {
    dispatch(remove({ id }));
  };

  const handleAdd = (item: CartItem) => {
    dispatch(add(item));
  };

  return (
    <>
      <h2 className="font-bold text-lg mb-10 font-sans">Your Cart</h2>
      <div className="grid grid-flow-row grid-cols-3 h-auto gap-8 font-sans">
        <div className="col-span-2 text-sm">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card h-36 bg-white flex flex-row justify-between overflow-hidden items-center px-10 py-5 relative mb-5 gap-4"
              style={{ boxShadow: "5px 10px 20px rgb(0 0 0 / 0.1)" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full w-auto"
              ></img>
              <h2 className="font-semibold h-fit">{item.title}</h2>
              <h2 className="font-semibold h-fit">${item.price}</h2>
              <div className="text-inherit flex gap-4 h-fit">
                <button
                  className="bg-slate-950 rounded-md text-white w-fit h-fit"
                  style={{ padding: "0.25rem 0.4rem" }}
                  onClick={() => handleRemove(item.id)}
                >
                  <Minus size={13} />
                </button>
                <div className="text-sm">{item.quantity}</div>
                <button
                  className="bg-slate-950 rounded-md text-white w-fit h-fit"
                  style={{ padding: "0.25rem 0.4rem" }}
                  onClick={() => handleAdd(item)}
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="card min-h-full bg-white overflow-hidden relative p-4 flex flex-col justify-between font-semibold"
          style={{ boxShadow: "10px 5px 20px rgb(0 0 0 / 0.1)" }}
        >
          <div>
            <h2 className="text-base">Your Total</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-between text-sm mt-4 gap-2"
              >
                <p>
                  {item.title}
                  <span className="text-zinc-400 pl-2 font-normal">
                    X{item.quantity}
                  </span>
                </p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-base mb-3 flex flex-row justify-between mt-4">
              Total <span>${totalPrice}</span>
            </h2>
            <button
              className="btn w-full bg-black text-white thin hover:bg-zinc-800 duration-200 rounded-2xl"
              style={{ fontSize: "0.7rem" }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
