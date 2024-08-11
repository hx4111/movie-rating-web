"use client"

import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";
import { useState } from "react";
import { Movie } from "@/interface/movie";
import { searchMovie } from "@/lib/ssrdata";
import { Button } from "@nextui-org/button";

interface SearchProps {
  onSearched: (data: Movie[]) => void;
}

export const SearchInput = ({ onSearched }: SearchProps) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
      const res = searchMovie(query)
      onSearched(res)
  }

  return (
    <Input
      classNames={{
        base: "h-10 w-1/3",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper: "h-full font-normal text-default-50 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Type to search..."
      size="sm"
      endContent={<Button
        onClick={handleSearch}>
        <SearchIcon size={18}/>
        </Button>
      }
      type="search"
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}