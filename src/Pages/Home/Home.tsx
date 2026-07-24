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
      </div>
      <TitleCards sectionTitle={"Popular on Netflix"} />
      <div className="more-cards">
        <TitleCards sectionTitle={"New on Netflix"} />{" "}
        <TitleCards sectionTitle={"Older on Netflix"} />{" "}
        <TitleCards sectionTitle={"Newest on Netflix"} />
      </div>
      
    </div>
  );
};
