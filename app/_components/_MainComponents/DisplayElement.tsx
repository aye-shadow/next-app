import ProductsCard from "@/app/_components/_ProductsComponents/ProductsCard";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  // rating: {
  //   rate: number;
  //   count: number;
  // };
}

const DisplayElement = async ({
  data,
}: {
  data: string;
}) => {
  const res = await fetch(data);
  const products: Product[] = await res.json();

  return (
    <>
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductsCard key={product.id} data={product}></ProductsCard>
        ))}
      </div>
    </>
  );
};

export default DisplayElement;
