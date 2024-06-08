import { redirect } from "next/navigation";
import React from "react";

const page = ({ searchParams }: any) => {
  const query = searchParams.query;
  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  return (
    <>
      <div>Display search results for {query}</div>
    </>
  );
};

export default page;
