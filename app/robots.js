export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/movie/",
        "/popular/",
        "/trending/",
        "/faq",
        "/searchresults/",
      ],
    },
    sitemap: "https://wtfilm.vercel.app//sitemap.xml",
  };
}
