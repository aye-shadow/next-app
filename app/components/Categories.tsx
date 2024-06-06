import React from "react";

const Categories = ({data}: {data: {text: string}}) => {
  return (
    <>
      <li className="hover:font-semibold cursor-pointer">{data.text}</li>
    </>
  );
};

export default Categories;
