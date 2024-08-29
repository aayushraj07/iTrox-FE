import { useState } from "react";
import Post from "./Post";
import ActionBar from "./ActionBar";

function Advertisement(props) {
  const [adData, setAdData] = useState([]);

  return (
    <div className="ad">
      <Post {...props} />
      <ActionBar />
      <Post {...props} />
      <ActionBar />
    </div>
  );
}

export default Advertisement;
