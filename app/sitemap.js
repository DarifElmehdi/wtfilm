import getIds from "./imdb_ids";

export default function sitemap() {
  const baseURL = "https://yts-three.vercel.app";
  const imdb_ids = getIds();
  const moviePages = imdb_ids?.map((id) => {
    return {
      url: `${baseURL}/movie/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });
  console.log(imdb_ids);
  return [
    {
      url: "https://yts-three.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://yts-three.vercel.app/faq",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...moviePages,
  ];
}
