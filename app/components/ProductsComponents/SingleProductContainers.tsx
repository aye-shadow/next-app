import React from "react";

const SingleProductContainers = ({
  data,
}: {
  data: { title: string; text: string };
}) => {
  return (
    <div className="font-sans text-sm">
      <div className="text-zinc-300 mt-3">{data.title}</div>

      {data.title === "Price" ? (
        <div className="font-bold text-xl">{data.text}</div>
      ) : (
        <div>{data.text}</div>
      )}
    </div>
  );
};

export default SingleProductContainers;
