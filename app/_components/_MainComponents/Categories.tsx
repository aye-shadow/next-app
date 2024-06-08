"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Categories = () => {
  const pathname = usePathname();

  // /category/electronics
  return (
    <>
      <ul className="flex gap-4 font-sans text-xs pt-4">
        {[
          {
            id: 1,
            name: "Electronics",
            link: "/category/electronics",
          },
          {
            id: 2,
            name: "Men's Clothing",
            link: "/category/mensclothing",
          },
          {
            id: 3,
            name: "Women's Clothing",
            link: "/category/womensclothing",
          },
          {
            id: 4,
            name: "Jewelery",
            link: "/category/jewelery",
          },
        ].map((category) => {
          return (
            <>
              <Link href={category.link}>
                <li
                  key={category.id}
                  className={`hover:font-semibold cursor-pointer ${
                    pathname === category.link ? "font-semibold" : ""
                  }`}
                >
                  {category.name}
                </li>
                {/* <Categories data="Mens Fashion"></Categories> */}
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
