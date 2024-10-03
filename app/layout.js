import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import wtfilm from "./wtfilm.png";
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
  metadataBase: "https://wtfilm.vercel.app/",
  keywords: [
    "Watch movies online",
    "Latest movies 2024",
    "Popular movie streaming",
    "Best movie streaming sites",
    "Stream movies in HD",
    "Free movie streaming",
    "Watch movies in 4K",
    "Latest movie releases",
    "New movies online",
    "Watch popular movies",
    "Best movies to watch",
    "Movie streaming platforms",
    "HD movie streaming",
    "Stream new releases",
    "Watch trending movies",
    "Online movie website",
    "Top movie streaming site",
    "Full HD movies online",
    "Watch movies legally",
    "New movie streaming site",
    "Watch movies anytime",
    "4K movies online",
    "Best movies 2024",
    "Free HD movie streaming",
    "Movie streaming without ads",
    "Watch blockbuster movies",
    "Stream top movies",
    "Movie recommendations 2024",
    "Free movie watchlists",
    "Latest movie trailers",
    "Top-rated movies 2024",
    "Online cinema experience",
    "Watch the latest blockbusters",
    "New release movie streaming",
    "Movie trends 2024",
    "Best films to watch",
    "Unlimited movie streaming",
    "Free movie websites",
    "Movie streaming in 4K",
    "Latest Hollywood movies",
    "Movie watchlist 2024",
    "High-quality movie streaming",
    "Movies online without ads",
    "Best streaming movies",
    "Trending films online",
    "Watch full movies free",
    "Latest movie updates",
    "Top movie streaming platform",
    "Best online movies 2024",
    "Stream movies instantly",
    "Online streaming for movies",
    "Watch 2024 new releases",
    "Popular movies in 4K",
    "Movie streaming without signup",
    "Best free streaming sites",
    "Latest action movies 2024",
    "Watch free movies online",
    "Stream top-rated movies",
    "Free online movie site",
    "Watch movies now",
    "Best movie websites",
    "Watch films in 4K",
    "Latest movie trailers 2024",
    "Online movie releases",
    "Free movie download site",
    "Stream movies without limits",
    "Watch top movies free",
    "Movie streaming free HD",
    "Best movie streaming platform",
    "Watch 2024 blockbusters",
    "Latest movie recommendations",
    "Top films to stream",
    "Best movies online 2024",
    "Stream movies at home",
    "Full movies streaming",
    "Watch latest movies now",
    "Movie streaming websites 2024",
    "Best cinema online",
    "Latest movies free",
    "Watch movies no ads",
    "New movie releases online",
    "Watch movies 2024",
    "Online movie database",
    "Best streaming platforms 2024",
    "2024 movie streaming",
    "Latest movie watchlist",
    "Top movie streaming sites",
    "Watch 2024 films online",
    "Best movie streaming apps",
    "Movie streaming services",
    "Watch trending films",
    "Stream top movies online",
    "Free HD movies no signup",
    "Watch the latest releases",
    "Stream films in HD",
    "Best free movies to watch",
    "Watch films instantly",
    "Free movie watchlist 2024",
    "Top-rated 2024 films",
    "Watch free movies in 4K",
  ],
  title: {
    default: "WTFilm - Watch Movies For Free",
    template: ["%s | WTFilm", "WTFilm | %s"],
  },
  openGraph: {
    title: "WTFilm - Watch Movies For Free", // Added Open Graph title
    description:
      "Welcome to WTFilm, your ultimate destination for watching and staying updated on the latest hit movies. Stream in flawless 1080p, 4K, or even 3D—all with lightning-fast load times. Say goodbye to buffering and hello to premium entertainment.",
    image: wtfilm, // Replace with your image URL
    url: "https://wtfilm.vercel.app/", // Your website URL
    type: "website", // Open Graph type
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="yandex-verification" content="3f44e63884fae852" />
      <meta name="msvalidate.01" content="975F605DE963BC445587F2A7C64B3E4D" />
      <meta
        name="google-site-verification"
        content="ayXiRB1PdfaxbYm2NK_OPqX8G9uwIJTDdngwzsMq5JU"
      />
      <Script
        type="text/javascript"
        src="//thermometerpushfulabnegate.com/72/28/8e/72288ec7edc033db4b3a5dfda653af37.js"
      ></Script>
      <Script
        type="text/javascript"
        src="//thermometerpushfulabnegate.com/d6/4e/c1/d64ec10293c2399069c4afd581fae50b.js"
      ></Script>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
