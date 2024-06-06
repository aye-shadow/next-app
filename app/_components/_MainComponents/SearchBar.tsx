"use client";
import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      className="p-2 text-xs rounded font-sans flex-1 bg-transparent focus:outline-none placeholder:text-inherit"
      placeholder="Search"
    />
  );
};

export default SearchBar;
