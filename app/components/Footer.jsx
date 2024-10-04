import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
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
  return (
    <div>
      <Separator className="max-w-screen-lg mx-auto" />
      <footer className="max-w-screen-lg mx-auto flex flex-col items-center space-y-4 p-3">
        <ul className="text-center space-x-4 flex flex-row">
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
        <aside className="mx-auto text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} - Zen Mehdi</p>
        </aside>
      </footer>
    </div>
  );
}

/* <nav>
        <div className="grid grid-flow-col gap-4 text-primary">
          <a
            target="_blank"
            href="https://www.cpmrevenuegate.com/q8syeyg2?key=d8bfa1148e5e4276c6c4e7039a93d652"
          ></a>
          <a
            target="_blank"
            href="https://www.cpmrevenuegate.com/q8syeyg2?key=d8bfa1148e5e4276c6c4e7039a93d652"
          ></a>
        </div>
      </nav>*/
