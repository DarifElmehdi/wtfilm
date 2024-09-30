import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function Hero() {
  return (
    <div className="w-full max-w-screen-lg   flex flex-col items-center space-y-8 mt-8 ">
      <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Download YTS YIFY Movies: High Definition in the Smallest File Size
      </h3>
      <blockquote className="max-w-screen-md w-full px-4 text-pretty italic">
        Welcome to the new official YTS website. Here you can browse, watch and
        download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality,
        all at the smallest file size. YTS Movies Torrents.
      </blockquote>
      <Link href="#" className="text-primary px-4">
        <h4>
          IMPORTANT - This is the only new official domain for YIFY Movies
        </h4>
      </Link>
      <Separator />
    </div>
  );
}
