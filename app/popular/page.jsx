import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MovieCard from "@/app/components/MovieCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default async function page() {
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
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    options
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const search = data.results;
  return (
    <div>
      <Header />
      <div className="min-h-screen max-w-screen-lg mx-auto">
        <h1 className="text-secondary-primary font-normal w-full text-center my-4">
          Popular Movies
        </h1>
        <Separator />
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
          {search.map(
            (item) =>
              item.poster_path && (
                <MovieCard
                  key={item.id}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  name={item.title}
                  rating={Number(item.vote_average).toFixed(1)}
                  genres_ids={item.genre_ids.slice(0, 3)}
                  id={item.id}
                />
              )
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}