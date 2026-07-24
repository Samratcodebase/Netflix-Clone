import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="Social-handels">
        <p>
          Questions? Call
          <a href="tel:181"> 181</a>
        </p>

        <img src={youtube_icon} alt="" />

        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />

        <img src={facebook_icon} alt="" />
      </div>

      <div className="footer-ul">
        <ul>
          <li>
            <a href="https://help.netflix.com/support/412">FAQ</a>
          </li>
          <li>
            <a href="https://help.netflix.com">Help Centre</a>
          </li>
          <li>
            <a href="/youraccount">Account</a>
          </li>
          <li>
            <a href="https://media.netflix.com/">Media Centre</a>
          </li>
          <li>
            <a href="http://ir.netflix.com/">Investor Relations</a>
          </li>
          <li>
            <a href="https://jobs.netflix.com/jobs">Jobs</a>
          </li>
          <li>
            <a href="/watch">Ways to Watch</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/corpinfo">
              Corporate Information
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/contactus">Contact Us</a>
          </li>
          <li>
            <a href="https://fast.com">Speed Test</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
          </li>
          <li>
            <a href="https://www.netflix.com/in/browse/genre/839338">
              Only on Netflix
            </a>
          </li>
        </ul>
      </div>

      <label htmlFor="language">Select Language</label>
      <select id="language" name="LanguageSelect">
        <option value="en-IN" selected>
          English
        </option>
        <option value="hi-IN">हिन्दी</option>
      </select>

      <p>Netflix India</p>

      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </footer>
  );
}
