import { useEffect, useRef, useState } from "react";
import "./TitleCard.css";

import type { Movie } from "./TitleCard";
import { FetchMovies } from "../../ApiClient/api";

export default function TitleCards({
  sectionTitle,
  category,
}: {
  sectionTitle: string;
  category?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [apiData, setapiData] = useState<Movie[]>();
  useEffect(() => {
    const callMovie = async () => {
      const movie = await FetchMovies();

      setapiData(movie?.results);
    };
    callMovie();
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const handleScrollWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY || e.deltaX;
      if (!delta) return;
      currentCard.scrollLeft += delta * 2;
    };

    currentCard.addEventListener("wheel", handleScrollWheel, {
      passive: false,
    });
    return () => {
      currentCard.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  // {
  //       "adult": false,
  //       "backdrop_path": "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
  //       "genre_ids": [
  //         16,
  //         12,
  //         10751,
  //         14,
  //         35
  //       ],
  //       "id": 502356,
  //       "original_language": "en",
  //       "original_title": "The Super Mario Bros. Movie",
  //       "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
  //       "popularity": 6572.614,
  //       "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  //       "release_date": "2023-04-05",
  //       "title": "The Super Mario Bros. Movie",
  //       "video": false,
  //       "vote_average": 7.5,
  //       "vote_count": 1456
  //     },

  return (
    <section className="TitleCards-section">
      <h1 className="TitleCards-heading">
        {sectionTitle} {category ? category : "Samrat ji Fav"}
      </h1>
      <div className="TitleCards-row" ref={cardRef}>
        {apiData?.map((movie) => {
          return (
            <article
              className="Title-Card"
              key={`${movie.id}-${movie.original_title}`}
            >
              <div className="Title-Card-image-wrap">
                <img
                  src={`https://image.tmdb.org/t/p/${"w780"}/${movie.backdrop_path}`}
                  alt={movie.original_title}
                />
              </div>
              <h2 className="Title-Card-title">{movie.original_title}</h2>
            </article>
          );
        })}
      </div>
    </section>
  );
}
