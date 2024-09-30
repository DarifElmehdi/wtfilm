import React from "react";
import SimpleCard from "./SimpleCard";
import Link from "next/link";

export default async function Recommendations(props) {
  const { id } = props;

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
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
    options
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const recommendations = data.results.slice(0, 4);
  return (
    <section>
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
        Similar Movies
      </h3>
      <div className="grid grid-cols-2 gap-1 mt-4 min-w-64">
        {recommendations.map((item) => (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <SimpleCard
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              name={item.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
