import React from "react";

export default async function Keywords(props) {
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
    `https://api.themoviedb.org/3/movie/${id}/keywords`,
    options
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const keywords = data.keywords;
  return (
    <div className="flex flex-row flex-wrap text-center gap-2 p-2">
      {keywords.map((item) => (
        <p
          key={item.id}
          className="px-2 py-1 rounded-lg text-sm bg-accent text-accent-foreground italic"
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}
