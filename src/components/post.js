import "./css/post.css";
import shoeAd from "./css/icons/shoeAd.jpeg";

function Post(props) {
  return (
    <div className="post">
      <div className="postImage">
        <img className="adImage" src={shoeAd}></img>
      </div>
      <div className="postDetails">
        <div className="detail">Name</div>
        <div className="detail">Age</div>
        <div className="detail">Description</div>
        <div className="detail">Type</div>
      </div>
    </div>
  );
}

export default Post;
