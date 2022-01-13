import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IsAuthenticated from "./isAuthenticated";
import EnsureGuest from "./ensureGuest";

import ThoughtsPage from "./pages/thoughts";
import GalleryPage from "./pages/gallery";
import UpcomingPage from "./pages/upcoming";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/actions";

import axios from "axios";

import TopBar from "./components/layout/topBar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  const getUser = async () => {
    try {
      const res = await axios.get("/auth/validate");
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(setUser(res.data));
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    if (!user) getUser();
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="overflow-hidden">
        <Router>
          {user ? <TopBar></TopBar> : ""}
          <Routes>
            <Route exact path="/" element={<IsAuthenticated />}>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/thoughts" element={<ThoughtsPage />} />
              <Route path="/upcoming" element={<UpcomingPage />} />
            </Route>
            <Route exact path="/login" element={<EnsureGuest />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
