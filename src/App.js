import "./App.css";
import ActionBar from "./components/ActionBar";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Footbar from "./components/Footbar";

import React, { useState, useEffect } from "react";
import Advertisement from "./components/Advertisment";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/advertisement")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <div className="container"> */}
      <div className="ad">
        {data.map((item, index) => (
          <Advertisement key={index} {...item} />
        ))}
      </div>
      {/* </div> */}
      <div>
        <Footbar />
      </div>
    </div>
  );
}

export default App;
