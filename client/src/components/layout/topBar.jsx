import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

class TopBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar sx={{ alignSelf: "center" }}>
          <Button component={Link} to="/gallery" color="inherit">
            Gallery
          </Button>
          <Button component={Link} to="/thoughts" color="inherit">
            Thoughts
          </Button>
          <Button component={Link} to="/upcoming" color="inherit">
            Upcoming
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
