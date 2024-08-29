import "./css/Navbar.css";
import dark from "./css/icons/dark.png";
import account from "./css/icons/account.png";
import ReactSwitch from "react-switch";

function Navbar({ toggleTheme, theme }) {
  return (
    <div className="navbar">
      <div className="logo">Navbar</div>
      <div className="hamburger">
        <ul>
          <li className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </li>
          <li>
            <button class="post-button" role="button">
              Post
            </button>
          </li>
          <li>
            <a href="profile.html">
              <img src={account}></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
