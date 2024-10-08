import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";

const hrefs = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Popular",
    href: "/popular",
  },
  {
    id: 3,
    name: "Trending",
    href: "/trending",
  },
  {
    id: 4,
    name: "Browse Movies",
    href: "/",
  },
  {
    id: 5,
    name: "FAQ",
    href: "/faq",
  },
];
export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <header className=" w-full max-w-screen-lg sticky top-0  flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <ul className="hidden flex-col  gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 text-md font-bold "
            >
              <span className="not-sr-only text-nowrap">WTFilm</span>
            </Link>
          </li>
          {hrefs.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                href={item.href}
                className="text-muted-foreground text-nowrap transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <span className="sr-only">WTFilm</span>
              </Link>
              {hrefs.map((item) => (
                <li key={item.id} className="list-none">
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <SearchBar />
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
