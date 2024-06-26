"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface category {
  name: string;
  link: string;
}

const Categories = ({ data }: { data: category }) => {
  const pathname = usePathname();

  return (
    <li
      className={`hover:font-semibold cursor-pointer ${
        pathname === data.link ? "font-semibold" : ""
      }`}
    >
      <Link href={data.link}>{data.name}</Link>
    </li>
  );
};

export default Categories;
