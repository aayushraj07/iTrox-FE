import "./css/post.css";
import shoeAd from "./css/icons/shoeAd.jpeg";
import { useEffect } from "react";

function Post({ title, description, type }) {
  return (
    <div className="post">
      <div className="postImage">
        <img className="adImage" src={shoeAd}></img>
      </div>
      <div className="postDetails">
        <div className="detail">Title : {title}</div>
        <div className="detail">Description : {description}</div>
        <div className="detail">Type : {type}</div>
      </div>
    </div>
  );
}

export default Post;
