import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCardImage = ({ data }: { data: string }) => {
  return (
    <Link href="/ProductDetails">
      <Image
        src={data}
        alt="Product Image"
        className="hover:scale-105 duration-200 cursor-pointer"
        fill={true}
        objectFit="contain"
      />
    </Link>
  );
};

export default ProductCardImage;
