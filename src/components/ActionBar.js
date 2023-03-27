import "./css/ActionBar.css";
import unlike from "./css/icons/unlike.png";
import like from "./css/icons/like.png";
import share from "./css/icons/share.png";
import save from "./css/icons/save.png";

function ActionBar() {
  return (
    <div className="bar">
      <div className="action-icons">
        <a>
          <img className="like" src={2 > 3 ? like : unlike}></img>
        </a>
      </div>
      <div className="action-icons">
        <a>
          <img className="share" src={share}></img>
        </a>
      </div>
      <div className="action-icons">
        <a>
          <img className="save" src={save}></img>
        </a>
      </div>
    </div>
  );
}

export default ActionBar;
