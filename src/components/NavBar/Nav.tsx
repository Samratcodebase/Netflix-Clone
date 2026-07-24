import "./Nav.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import Bell from "../../assets/bell_icon.svg";
import Profile from "../../assets/profile_img.png";
import Caret from "../../assets/caret_icon.svg";
export default function Nav() {
  return (
    <nav className="nav-bar-container">
      <div className="left-nav-conatiner">
        <img src={logo} alt="Netflix-Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li> Movies </li>
          <li> News & Popular </li>
          <li> My List </li>
          <li> Browse By Language</li>
        </ul>
      </div>
      <div className="right-nav-container">
        <img className="icons" src={searchIcon} alt="Search" />
        <p>Children</p>
        <img className="icons" src={Bell} alt="Notifications" />
        <div className="nav-bar-profile">
          <img className="icons profile" src={Profile} alt="Profile" />
          <img className="icons" src={Caret} alt="Menu" />
          <div className="drop-down">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
