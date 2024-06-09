import DisplayElement from "@/app/_components/_MainComponents/DisplayElement";
import React from "react";

const page = async ({params} : any) => {
  return <DisplayElement data={`https://fakestoreapi.com/products/category/${params.name}`} />;
};

export default page;
