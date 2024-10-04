export default async function getIds(totalPages) {
  const API_TOKEN = process.env.API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  let allIds = []; // To store all movie IDs

  for (let page = 1; page <= totalPages; page++) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();

      // Extract the IDs from the current page and add them to the allIds array
      const ids = data.results.map((item) => item.id);
      allIds = allIds.concat(ids); // Add the IDs to the list
    } catch (err) {
      console.error(`Error fetching page ${page}:`, err);
    }
  }

  return allIds;
}
