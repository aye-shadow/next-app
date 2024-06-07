import React from "react";
import ProductsCard from "./_components/_ProductsComponents/ProductsCard";

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

const page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
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

export default page;
