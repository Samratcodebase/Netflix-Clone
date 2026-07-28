import axios from "axios";
import type { MoviesResponse } from "../components/TitleCards/TitleCard";
const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzA2ZmQzMjdiZjBhMjRhZTQwNjE5OTQ2M2E4M2U2OCIsIm5iZiI6MTc4NTI2MTEzNS40Miwic3ViIjoiNmE2OGVjNGY2NmQzMGM5ODU3NGIyMGZlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4Pwo2Yh6J9ak72X-KQ1VuEc1w3Y_Ik_2oXnH4nfkCuE",
  },
};

export const FetchMovies = async () => {
  try {
    const response = await axios.request<MoviesResponse>(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
