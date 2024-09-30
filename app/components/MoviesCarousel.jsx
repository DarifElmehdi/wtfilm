import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import MovieCard from "./MovieCard";
export default async function MoviesCarousel(props) {
  const { location, name } = props;
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
    location
      ? `https://api.themoviedb.org/3/movie/${location}?language=en-US&page=1`
      : `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    options
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const popular = data.results.slice(0, 10);
  return (
    <div className="w-full  max-w-screen-lg flex flex-col items-center space-y-6 mt-8">
      <h4 className="text-secondary-primary font-normal italic">{name}</h4>
      <Carousel
        opts={{
          align: "center",
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
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                name={item.title}
                rating={Number(item.vote_average).toFixed(1)}
                genres_ids={item.genre_ids.slice(0, 3)}
                release={item.release_date.split("-")[0]}
                id={item.id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <Separator />
    </div>
  );
}
