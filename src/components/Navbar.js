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
            <img src={dark} />
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
