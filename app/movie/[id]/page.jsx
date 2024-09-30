import Header from "@/app/components/Header";
import Recommendations from "@/app/components/Recommendations";
import SimpleCard from "@/app/components/SimpleCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default async function page({ params }) {
  const id = params.id;

  const API_KEY = process.env.API_KEY;
  const API_TOKEN = process.env.API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer  ${API_TOKEN}`,
    },
  };
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const movie = data;
  return (
    <div>
      <Header />
      <section className="w-full max-w-screen-lg flex flex-col items-center md:items-start md:flex-row  mx-auto space-y-8 md:space-y-0 mt-8">
        <div className="w-full flex flex-col items-center space-y-3 max-w-xs">
          <SimpleCard
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            name="Deadpool !"
          />
          <div className="space-x-3 flex flex-row">
            <Button className="bg-chart-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-2">Download</p>
            </Button>
            <Button className="bg-chart-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mx-2">Watch Now</p>
            </Button>
          </div>
        </div>
        <div className="px-2 space-y-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {movie.title}
          </h3>
          <p className="leading-7 px-4">{movie.tagline}</p>
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
            Plot Summary
          </h3>
          <blockquote className=" px-4 italic">{movie.overview}</blockquote>

          <section className="flex flex-row w-full justify-evenly">
            <h2>{movie.release_date}</h2>
            <Separator orientation="vertical" />
            <h2>{movie.vote_average}</h2>
            <Separator orientation="vertical" />
            <h2>{movie.origin_country}</h2>
          </section>
        </div>
        <div>
          <Recommendations id={movie.id} />
        </div>
      </section>
    </div>
  );
}
