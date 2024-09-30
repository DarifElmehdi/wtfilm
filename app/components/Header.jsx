"use client";

import Link from "next/link";
import { Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";
import { useRouter } from "next/navigation";

const hrefs = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "4k",
    href: "/4k",
  },
  {
    id: 3,
    name: "Trending",
    href: "/trending",
  },
  {
    id: 4,
    name: "Browse Movies",
    href: "/movies",
  },
  {
    id: 5,
    name: "FAQ",
    href: "/faq",
  },
];
export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };
  return (
    <header className="sticky top-0  flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col  gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <span className="sr-only">YTS</span>
        </Link>

        {hrefs.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-muted-foreground text-nowrap transition-colors hover:text-foreground"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
              <span className="sr-only">YTS</span>
            </Link>
            {hrefs.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form
          className="ml-auto flex-1 sm:flex-initial"
          onSubmit={handleSearch}
        >
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Quick Search"
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <ModeToggle />
      </div>
    </header>
  );
}
