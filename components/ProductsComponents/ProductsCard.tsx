import React from "react";
// import StockImage from "../StockImage.jpg";
import { ShoppingCart } from "lucide-react";
import { Switch, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import ProductCardImage from "./ProductCardImage";

const ProductsCard = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}) => {
  return (
    <>
      <div
        className="card col-span-1 shadow-xl p-2 bg-white overflow-hidden"
        style={{
          boxShadow: "-5px -5px 20px rgb(0 0 0 / 0.1)",
        }}
      >
        <div className="w-full h-full flex flex-col p-0 m-0 text-xs justify-between font-sans">
          <section>
            <div className="min-h-48 rounded-lg relative overflow-hidden">
              <ProductCardImage data={data.image} />
            </div>
            <h1 className="font-bold text-sm cursor-pointer hover:text-zinc-700 hover:underline hover:underline-offset-1">
              {data.title}
            </h1>
            <div className="text-zinc-500 mb-4">{data.category}</div>
            <Paragraph
              ellipsis={{ rows: 4, expandable: false }}
              className="text-xs font-sans"
            >
              {data.description}
            </Paragraph>
          </section>
          <section>
            <div className="mt-2 mb-4">
              Price:
              <div className="font-bold font-serif text-sm inline pl-1">
                Rs.{data.price}
              </div>
            </div>
            <button
              className="btn w-full bg-black text-white thin hover:bg-zinc-800 duration-200"
              style={{ fontSize: "0.7rem" }}
            >
              Buy Now
              <ShoppingCart size={15} />
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
