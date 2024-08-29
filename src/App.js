import "./App.css";
import ActionBar from "./components/ActionBar";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Footbar from "./components/Footbar";

import React, { useState, useEffect, createContext } from "react";
import Advertisement from "./components/Advertisment";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div className="filter"></div>
        <div className="ad">
          {data.map((item, index) => (
            <Advertisement key={index} {...item} />
          ))}
        </div>
        <div>
          <Footbar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
