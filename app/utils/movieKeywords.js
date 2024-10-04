export default async function getKeywordsById(id) {
  const API_TOKEN = process.env.API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  const keywords = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/keywords`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return keywords;
}
