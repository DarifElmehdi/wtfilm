import Header from "./components/Header";
import Hero from "./components/Hero";
import MoviesCarousel from "./components/MoviesCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <MoviesCarousel name="Popular Now" location="popular" />
      <MoviesCarousel name="Trending Today" />
      <MoviesCarousel name="Upcoming" location="upcoming" />
    </div>
  );
}
