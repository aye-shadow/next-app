import React from "react";
import Image from "next/image";

const ProductCardImage = ({ data }: { data: string }) => {
  return (
    <Image
      src={data}
      alt="Product Image"
      className="hover:scale-105 duration-200 cursor-pointer"
      fill={true}
      objectFit="contain"
    />
  );
};

export default ProductCardImage;
