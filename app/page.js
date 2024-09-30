import Header from "./components/Header";
import Hero from "./components/Hero";
import MoviesCarousel from "./components/MoviesCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <MoviesCarousel name="Popular Picks" location="popular" />
      <MoviesCarousel name="Now Trending" />
      <MoviesCarousel name="Don't Miss These" location="upcoming" />
    </div>
  );
}
