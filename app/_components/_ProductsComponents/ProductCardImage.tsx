import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCardImage = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    image: string;
  };
}) => {
  return (
    <Link href={`/product?id=${data.id}`} key={data.id}>
      <Image
        src={data.image}
        alt="Product Image"
        className="hover:scale-105 duration-200 cursor-pointer"
        fill={true}
        objectFit="contain"
      />
    </Link>
  );
};

export default ProductCardImage;
