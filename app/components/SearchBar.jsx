"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState(" ");
  const handleSearch = (e) => {
    e.preventDefault();
    query && router.push(`/searchresults/${query}`);
  };
  return (
    <form className="ml-auto flex-1 sm:flex-initial" onSubmit={handleSearch}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Quick Search"
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
    </form>
  );
}
