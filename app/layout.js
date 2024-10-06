import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import getKeywords from "./utils/keywords";
import Script from "next/script";
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

export async function generateMetadata() {
  const keywords = await getKeywords();
  return {
    metadataBase: "https://wtfilm.vercel.app/",
    keywords: keywords,
    title: "WTFilm - Watch Movies For Free",

    description:
      "Welcome to WTFilm - ZERO ADS, your premier destination for streaming the latest movies and staying updated on popular films. Enjoy seamless viewing in 1080p, 4K, or even 3D, with no buffering no ads — just pure entertainment at your fingertips.",

    openGraph: {
      title: "WTFilm - Watch Movies For Free",
      description:
        "Join WTFilm to watch and discover the latest hit movies. Stream in high-quality formats without interruptions, ensuring a top-notch entertainment experience.",
      images:
        "https://www.plex.tv/wp-content/uploads/2024/01/Watch-Free-Share-Image.png", // Your actual image URL
      url: "https://wtfilm.vercel.app/", // Your website URL
      type: "website", // Open Graph type
      site_name: "WTFilm", // Name of your site
      locale: "en_US", // Locale for the content
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="3QhXpuHPCCRSKUwMj3dG45B564ntQhiTkThY1lY3yWE"
      />
      <meta
        name="google-adsense-account"
        content="ca-pub-2312021810291062"
      ></meta>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2312021810291062"
        crossorigin="anonymous"
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
