import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import wtfilm from "./wtfilm.png";
import getKeywords from "./keywords";
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
  return {
    metadataBase: "https://wtfilm.vercel.app/",
    keywords: getKeywords(),
    title: "WTFilm - Watch Movies For Free",

    description:
      "Welcome to WTFilm, your premier destination for streaming the latest movies and staying updated on popular films. Enjoy seamless viewing in 1080p, 4K, or even 3D, with no buffering no ads — just pure entertainment at your fingertips.",

    openGraph: {
      title: "WTFilm - Watch Movies For Free",
      description:
        "Join WTFilm to watch and discover the latest hit movies. Stream in high-quality formats without interruptions, ensuring a top-notch entertainment experience.",
      image: "path/to/your/image.jpg", // Replace with your actual image URL
      url: "https://wtfilm.vercel.app/", // Your website URL
      type: "website", // Open Graph type
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
