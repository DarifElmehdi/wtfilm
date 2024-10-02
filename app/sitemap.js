import getIds from "./imdb_ids";

export default function sitemap() {
  const baseURL = "https://yts-three.vercel.app";
  const imdb_ids = getIds();
  const moviePages = imdb_ids?.map((id) => {
    return {
      url: `${baseURL}/movie/${id}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });
  return [
    {
      url: "https://yts-three.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://yts-three.vercel.app/faq",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://yts-three.vercel.app/popular",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://yts-three.vercel.app/trending",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...moviePages,
  ];
}
