import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Article from "./components/article/Article";
import Video from "./components/video/Video";
import Photo from "./components/photo/Photo";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App col-12">
        <div className="top col-12">
          <div className="col-2">
            <Header />
          </div>
          <div className="col-4"></div>
          <div className="col-6">
            <Navbar />
          </div>
        </div>
        <div className="col-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/video" element={<Video />} />
            <Route path="/photo" element={<Photo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
