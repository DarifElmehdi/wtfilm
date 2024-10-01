export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/*/"],
      disallow: "",
    },
    sitemap: "https://yts-mx.vercel.app/sitemap.xml",
  };
}
