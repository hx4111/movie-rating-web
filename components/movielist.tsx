"use client"

import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image";
import { StarFilledIcon } from "./icons";
import { Button } from "@nextui-org/button";
import { useRouter } from 'next/navigation';
import { Movie } from "@/interface/movie";
import { useState } from "react";
import { SearchInput } from "./search";

type CardProps = {
  id: string;
  title: string;
  coverImage: string;
  rate: number;
}

function MovieCard({id, title, coverImage, rate}: CardProps) {
  const router = useRouter()

  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[350px]"
          src={coverImage}
        />
      </CardBody>
      <CardFooter className="flex flex-col items-start justify-start p-4 h-28">
        <div className="flex justify-between w-full items-center mb-2">
          <div className="flex items-center">
            <StarFilledIcon></StarFilledIcon>{rate}
          </div>
          <Button color="primary" onClick={() => {router.push(`/detail/${id}`)}}>View</Button>
        </div>
        <div className="w-full">
          <b>{title}</b>
        </div>
      </CardFooter>
    </Card>
  )
}

type ListProps = {
  list: Movie[]
}

export function MovieList({list}: ListProps) {
  const [data, setData] = useState(list)
  const handleSearch = (newData: Movie[]) => {
    setData(newData);
  }

  return (
    <section>
      <div className="flex justify-start space-x-4">
        <div className="font-bold text-3xl w-1/3">Movie List </div>
        <SearchInput onSearched={handleSearch} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-4 md:py-4">
        <div className="gap-8 grid grid-cols-5 sm:grid-cols-5 grid-auto-rows-32">
          {data.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImage={movie.coverImage}
              rate={movie.rate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}