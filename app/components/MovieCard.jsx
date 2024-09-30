import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function MovieCard(props) {
  const { src, name, rating, genres_ids } = props;
  const genres_names = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return (
    <Link href="#">
      <div className="group m-1 relative rounded-tl-mdrounded-tl-md border-4 border-secondary-foreground overflow-hidden hover:border-primary  ">
        <Image src={src} width={260} height={200} alt={name} />
        <div className=" invisible group-hover:visible font-semibold text-lg  w-full h-full flex flex-col items-center justify-evenly absolute top-0  bg-primary-foreground">
          <div className="flex flex-col items-center space-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <p>{rating} / 10</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            {genres_names
              .filter((item) => genres_ids.includes(item.id))
              .map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
          </div>
          <Button>View Details</Button>
        </div>
      </div>
    </Link>
  );
}
