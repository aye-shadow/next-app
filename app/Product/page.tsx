import React from "react";

interface Product {
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
}

const page = async ({ params, searchParams }: any) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${searchParams.id}`
  );
  const product: Product[] = await res.json();

  return (
    <div>
      <h1>Product Details {searchParams.id}</h1>
      {/* Display product details */}
    </div>
  );
};

export default page;
