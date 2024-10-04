import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function Hero() {
  return (
    <div className="w-full max-w-screen-lg   flex flex-col items-center space-y-8 mt-8 ">
      <h1 className="text-center scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight">
        Unleash the Magic of Cinema - Stream the Latest Hits in Unbeatable
        Quality
      </h1>
      <blockquote className="max-w-screen-md w-full px-4 text-pretty italic">
        Welcome to <span className="font-semibold">WTFilm</span>, your ultimate
        destination for watching and staying updated on the latest hit movies.
        Stream in flawless 1080p.
        <span className="sr-only md:not-sr-only">
          All with lightning-fast load times. Say goodbye to buffering and hello
          to premium entertainment.
        </span>
      </blockquote>
      <Link href="#" className="text-primary px-4">
        <h2>
          <span className="font-semibold">IMPORTANT</span> : WTFilm is your
          go-to platform for the latest in popular cinema.
          <span className="sr-only md:not-sr-only">
            Stay ahead with exclusive access to trending films, all in one
            place.
          </span>
        </h2>
      </Link>
      <Link href="/popular">
        <Button variant="secondary" to="/popular" className="h-12 px-6">
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
          <p className="mx-2">Browse Popular Movies Now</p>
        </Button>
      </Link>
      <Separator />
    </div>
  );
}
