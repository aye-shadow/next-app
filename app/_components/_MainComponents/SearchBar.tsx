"use client";
import { Loader2, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState, useTransition } from "react";

const SearchBar = () => {
  // if it's in the middle of searching, wait
  const [isSearching, startTransition] = useTransition();

  // to set url
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const search = () => {
    startTransition(() => {
      router.push(queryLink);
    });
  };

  const queryLink = `/Search?query=${searchQuery}`;

  return (
    <>
      <input
        type="search"
        className="p-2 text-xs rounded font-sans flex-1 bg-transparent focus:outline-none placeholder-slate-400"
        placeholder="Search"
        value={searchQuery}
        onChange={(event) => {
          // setting value of search bar
          setSearchQuery(event.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.target as HTMLInputElement).value !== "") {
            search();
          }
        }}
        disabled={isSearching}
      />
      <button>
        <Link href={queryLink === "/Search?query=" ? "#" : queryLink}>
          {isSearching ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Search size={18} />
          )}
        </Link>
      </button>
    </>
  );
};

export default SearchBar;
