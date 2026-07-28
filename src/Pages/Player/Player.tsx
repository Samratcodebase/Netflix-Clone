import "./Player.css";
import { useNavigate, useParams } from "react-router";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

export default function Player() {
  const navigate = useNavigate();
  const param = useParams();
  console.log("Whole Object", param);

  console.log("Just the Id", param.id);

  const HandleClick = () => {
    navigate("/");
  };

  return (
    <div className="Player">
      <img
        className="Player-back"
        src={back_arrow_icon}
        alt="back arrow"
        onClick={HandleClick}
      />
      <iframe
        className="Player-video"
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${param.id}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="Player-info">
        <p className="Player-infoLabel">Published</p>
        <p className="Player-infoLabel">Name</p>
        <p className="Player-infoLabel">Type</p>
      </div>
    </div>
  );
}
