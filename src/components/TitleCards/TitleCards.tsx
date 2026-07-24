import { useEffect, useRef } from "react";
import "./TitleCard.css";
import cards from "../../assets/cards/Cards_data";

export default function TitleCards({
  sectionTitle,
  category,
}: {
  sectionTitle: string;
  category?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  return (
    <section className="TitleCards-section">
      <h1 className="TitleCards-heading">
        {sectionTitle} {category ? category : "Samrat ji Fav"}
      </h1>
      <div className="TitleCards-row" ref={cardRef}>
        {cards.map((card, index) => {
          return (
            <article className="Title-Card" key={`${index}-${card.name}`}>
              <div className="Title-Card-image-wrap">
                <img src={card.image} alt={card.name} />
              </div>
              <h2 className="Title-Card-title">{card.name}</h2>
            </article>
          );
        })}
      </div>
    </section>
  );
}
