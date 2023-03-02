import "./App.css";
import ActionBar from "./components/ActionBar";
import BottomBar from "./components/BottomBar";
import Navbar from "./components/Navbar";
import Post from "./components/post";
import Footbar from "./components/Footbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="ad">
          <Post />
          <ActionBar />
        </div>
        <Footbar />
      </div>
    </div>
  );
}

export default App;
