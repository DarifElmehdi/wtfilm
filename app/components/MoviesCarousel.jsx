import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "./MovieCard";
export default async function MoviesCarousel() {
  const API_KEY = process.env.API_KEY;
  const API_TOKEN = process.env.API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer  ${API_TOKEN}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&sort_by=popularity.desc`,
    options
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const popular = data.results;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-lg"
    >
      <CarouselContent>
        {popular.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <MovieCard
              key={item.id}
              src={`https://image.tmdb.org/t/p/w300//${item.poster_path}`}
              name={item.name}
              rating={Number(item.vote_average).toFixed(1)}
              genres_ids={item.genre_ids.slice(0, 3)}
              release={item.release_date.split("-")[0]}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
