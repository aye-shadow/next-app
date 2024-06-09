import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleProductContainers from "../_components/_ProductsComponents/SingleProductContainers";
import AddToCartButton from "../_components/_ProductsComponents/AddToCartButton";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const page = async ({ searchParams }: any) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${searchParams.id}`
  );
  const product: Product = await res.json();

  {
    searchParams.id;
  }
  {
    product.id;
  }
  return (
    <>
      <div className="px-16">
        <Link
          href="/"
          className="font-semibold text-sm font-sans hover:underline hover:underline-offset-1 hover:text-zinc-700"
        >
          Back
        </Link>
        <div className="grid grid-flow-row grid-cols-2 mt-10 gap-20">
          <div
            className="bg-white rounded-xl h-96 relative p-2"
            style={{
              boxShadow: "5px 5px 20px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="h-full w-full relative overflow-hidden">
              <Image
                src={product.image}
                alt="Product Image"
                fill={true}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="min-h-96 relative flex flex-col justify-between">
            <h2 className="font-bold text-lg">{product.title}</h2>
            <SingleProductContainers
              data={{ title: "Category", text: product.title }}
            />
            <SingleProductContainers
              data={{ title: "Description:", text: product.description }}
            />
            <SingleProductContainers
              data={{ title: "Price", text: `$${product.price}` }}
            />
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
