import "./css/Navbar.css";
import dark from "./css/icons/dark.png";
import account from "./css/icons/account.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Navbar</div>
      <div className="hamburger">
        <ul>
          <li>
            <img className="icons" src={dark} />
          </li>
          <li>
            <button>
              <a href="post.html"> Post</a>
            </button>
          </li>
          <li>
            <a href="profile.html" className="profile-btn">
              <img className="icons" src={account}></img> Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
