import getIds from "./moviesIds";

export default async function sitemap() {
  const baseURL = "https://wtfilm.vercel.app/";
  const imdb_ids = await getIds(500);
  const moviePages = imdb_ids.map((id) => {
    return {
      url: `${baseURL}/movie/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });
  return [
    {
      url: "https://wtfilm.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://wtfilm.vercel.app/faq",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: "https://wtfilm.vercel.app/popular/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://wtfilm.vercel.app/trending/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    ...moviePages,
  ];
}
