export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/movie", "/popular", "/trending", "/faq", "/searchresults"],
    },
    sitemap: "https://yts-three.vercel.app/sitemap.xml",
  };
}
