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
      href: "https://thermometerpushfulabnegate.com/v91j56sk?key=2dce535042a6582ec515de072042f72e",
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
