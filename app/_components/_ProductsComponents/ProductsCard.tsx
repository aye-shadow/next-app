import React from "react";
import { ShoppingCart } from "lucide-react";
import Paragraph from "antd/es/typography/Paragraph";
import ProductCardImage from "./ProductCardImage";
import AddToCart from "./AddToCartButton";

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
            <ProductCardImage data={data} />
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
                ${data.price}
              </div>
            </div>
            <AddToCart product={data}>
              <ShoppingCart size={15} />
            </AddToCart>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
