import "./Home.css";
import Nav from "../../components/NavBar/Nav";
import heroTitle from "../../assets/hero_title.png";
import TitleCards from "../../components/TitleCards/TitleCards";

export const Home = () => {
  return (
    <div className="Home">
      <Nav />
      <div className="Hero-section">
        <div className="Hero-overlay">
          <div className="Hero-content">
            <h1 className="Hero-text">Your next favorite story starts here</h1>
            <img
              className="Hero-title-image"
              src={heroTitle}
              alt="Hero title"
            />
            <div className="Hero-buttons">
              <button className="Hero-button Hero-button--play">Play</button>
              <button className="Hero-button Hero-button--info">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="more-cards">
        <TitleCards
          sectionTitle={"Blockbuster Movies"}
          category="now_playing"
        />
        <TitleCards sectionTitle={"Only on Netflix"} category="popular" />{" "}
        <TitleCards sectionTitle={"Upcoming"} category="top_rated" />{" "}
        <TitleCards sectionTitle={"Top Pics for you"} category="upcoming" />
      </div>
    </div>
  );
};
