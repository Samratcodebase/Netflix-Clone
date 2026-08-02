import "./Player.css";
import { useNavigate, useLoaderData } from "react-router";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

type LoaderVideo = {
  key: string;
  name: string;
  type: string;
  published_at: string;
};

export default function Player() {
  const navigate = useNavigate();
  const data = useLoaderData() as LoaderVideo;

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
        src={`https://www.youtube.com/embed/${data.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="Player-info">
        <p className="Player-infoLabel">{data.published_at.slice(0,10)}</p>
        <p className="Player-infoLabel">{data.name}</p>
        <p className="Player-infoLabel">{data.type}</p>
      </div>
    </div>
  );
}
