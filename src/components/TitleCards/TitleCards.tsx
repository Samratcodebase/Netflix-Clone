import { useEffect, useRef, useState } from "react";
import "./TitleCard.css";

import type { Movie } from "./TitleCard";
import { FetchMovies } from "../../ApiClient/api";
import { useNavigate } from "react-router";
export default function TitleCards({
  sectionTitle,
  category,
}: {
  sectionTitle: string;
  category?: string;
}) {
  const navigate = useNavigate();

  const goToplayer = (id: string) => {
    navigate(`/player/${id}`);
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const [apiData, setapiData] = useState<Movie[]>();
  useEffect(() => {
    const callMovie = async () => {
      const movie = await FetchMovies(category!);

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
  }, [category]);

  return (
    <section className="TitleCards-section">
      <h1 className="TitleCards-heading">
        {sectionTitle ? sectionTitle : "Popular On Netflix"}
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
                  onClick={() => goToplayer("OxXKDGO-MYQ")}
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
