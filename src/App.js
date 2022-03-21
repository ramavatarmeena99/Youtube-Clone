import "./App.css";
import Home from "./Pages/Home";
import VideoPlayer from "./Pages/VideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
