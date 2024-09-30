export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/movie", "/faq"],
      disallow: "",
    },
    sitemap: "https://newyts.vercel.app/sitemap.xml",
  };
}
