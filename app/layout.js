import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: "https://newyts.vercel.app/",
  keywords: [
    "yts mx",
    "yts torrent",
    "torrent",
    "yts movie",
    "yts download",
    "movies",
    "yts movies",
    "yts torrent magnet",
    "yts movie download",
    "yts series",
    "torrent download",
    "deadpool",
    "deadpool yts",
    "1337x",
    "yts tv",
    "yts yify",
    "yify",
    "yts subtitles",
    "subtitles",
    "yts proxy",
    "deadpool wolverine",
    "pirate bay",
    "utorrent",
    "yts downloader",
    "torrent movies",
    "the wasp",
    "yts dental view",
    "the pirate bаy",
    "x1337x",
    "crackle",
    "deadpool & wolverine torrent",
    "baiscopelk",
    "tfpdl",
    "best torrenting sites",
    "ytx",
    "deadpool and wolverine ott release date",
    "13377x.to",
    "apartment 7a",
    "5movierulz",
    "yt1s",
    "yamaha yts 62",
    "deadpool & wolverine",
    "watchsomuch",
    "nkiri",
    "yts .mx",
    "deadpool & wolverine yts",
    "y2mate",
    "sinpaş yts",
    "dailymotion",
    "pahe",
  ],
  title: {
    default: "YTS - The Official Home of YIFY Movies Torrent Download",
    template: "%s | YTS",
  },
  openGraph: {
    description:
      "Welcome to the new official YTS website. Here you can browse, watch and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality,all at the smallest file size. YTS Movies Torrents.",
    images: ["app/new_yts.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="975F605DE963BC445587F2A7C64B3E4D" />
      <meta
        name="google-site-verification"
        content="gLuq2Bx-J0w2wkT4Y7GoQFhNG4iWuUxBjl5AgFMR8Mg"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
