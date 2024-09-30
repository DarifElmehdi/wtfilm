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
  title: "YTS - The Official Home of YIFY Movies Torrent Download",
  description:
    "Welcome to the new official YTS website. Here you can browse, watch and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality,all at the smallest file size. YTS Movies Torrents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="ayXiRB1PdfaxbYm2NK_OPqX8G9uwIJTDdngwzsMq5JU"
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
