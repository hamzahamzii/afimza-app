import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThoughtsPage from "./pages/thoughts";
import GalleryPage from "./pages/gallery";
import UpcomingPage from "./pages/upcoming";
import HomePage from "./pages/home";
import TopBar from "./components/layout/topBar";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <TopBar></TopBar>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
          <Route path="/thoughts" element={<ThoughtsPage />}></Route>
          <Route path="/upcoming" element={<UpcomingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
