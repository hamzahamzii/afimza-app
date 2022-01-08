import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ThoughtsPage from "./pages/thoughts";
import GalleryPage from "./pages/gallery";
import UpcomingPage from "./pages/upcoming";
import HomePage from "./pages/home";
import TopBar from "./components/layout/topBar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
