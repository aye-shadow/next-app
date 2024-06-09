import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCardImage = ({
  data,
}: {
  data: {
    id: number,
    title: string,
    image: string
  };
}) => {
  return (
    <Link href={`/product?id=${data.id}`}>
      <div className="h-48 min-h-48 rounded-lg relative overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          className="hover:scale-105 duration-200 cursor-pointer object-contain"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
    </Link>
  );
};

export default ProductCardImage;
