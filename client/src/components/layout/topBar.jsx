import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TopBar = () => {
  const route = useLocation();
  const [value, setValue] = React.useState(route.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ alignSelf: "center" }}>
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab
            component={Link}
            to="/"
            value="/"
            icon={<HomeIcon />}
            aria-label="home"
          />
          <Tab
            component={Link}
            to="/gallery"
            value="/gallery"
            sx={{ color: "white" }}
            label="Gallery"
          />
          <Tab
            component={Link}
            to="/thoughts"
            value="/thoughts"
            sx={{ color: "white" }}
            label="Thoughts"
          />
          <Tab
            component={Link}
            to="/upcoming"
            value="/upcoming"
            sx={{ color: "white" }}
            label="Upcoming"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
