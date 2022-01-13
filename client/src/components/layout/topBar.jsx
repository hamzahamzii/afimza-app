import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { resetUser } from "../../store/actions";

const TopBar = () => {
  const route = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const [value, setValue] = React.useState(route.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logout = () => {
    axios.get("/auth/logout").then((res) => {
      dispatch(resetUser());
      localStorage.removeItem("user");
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
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
          </Typography>
          {user ? (
            <div className="flex justify-self-end items-center px-2">
              <Avatar src={user.image} />
              <span className="mx-2">{user.displayName}</span>
              <IconButton
                onClick={() => {
                  logout();
                }}
                sx={{ color: "white" }}
              >
                <LogoutIcon />
              </IconButton>
            </div>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
