import Link from "next/link";
import MovieCard from "./MovieCard";
import PopularCarousel from "./MoviesCarousel";

export default async function Hero() {
  return (
    <div className="w-full py-2 px-4 flex flex-col items-center space-y-8 mt-8 ">
      <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Download YTS YIFY movies: HD smallest size
      </h3>
      <blockquote className="max-w-screen-md w-full ml-4 text-pretty italic">
        Welcome to the new official YTS website. Here you can browse, watch and
        download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality,
        all at the smallest file size. YTS Movies Torrents.
      </blockquote>
      <Link href="#" className="text-primary">
        <h4>
          IMPORTANT - This is the only new official domain for YIFY Movies
        </h4>
      </Link>
      <h4 className="text-secondary-primary">Popular Now</h4>
      <PopularCarousel />
    </div>
  );
}
