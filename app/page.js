import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MoviesCarousel from "./components/MoviesCarousel";
import getIds from "./imdb_ids";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <MoviesCarousel name="Trending Today" />
      <MoviesCarousel name="Popular Picks" location="popular" />
      <MoviesCarousel name="Now Playing" location="now_playing" />
      <MoviesCarousel name="Top Rated" location="top_rated" />
      <MoviesCarousel name="Don't Miss These" location="upcoming" />
      <Footer />
    </div>
  );
}
