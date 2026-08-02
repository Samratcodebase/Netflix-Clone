import axios from "axios";
import { type LoaderFunctionArgs } from "react-router";
export const MovieLoader = async ({ params }: LoaderFunctionArgs) => {
  console.log("Movie Loader", params.id);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${params.id}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA2ZmQzMjdiZjBhMjRhZTQwNjE5OTQ2M2E4M2U2OCIsIm5iZiI6MTc4NTI2MTEzNS40Miwic3ViIjoiNmE2OGVjNGY2NmQzMGM5ODU3NGIyMGZlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4Pwo2Yh6J9ak72X-KQ1VuEc1w3Y_Ik_2oXnH4nfkCuE",
    },
  };

  try {
    const { data } = await axios.request(options);

    return data.results[0];
  } catch (error) {
    console.error(error);
  }
};
