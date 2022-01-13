// LIB IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const MongoDbStore = require("connect-mongo");
const connectDB = require("./config/db");

// GLOBALS IMPORTS
const { PORT, dbURI } = require("./globals");

// Passport config
require("./config/passport")(passport);

// APP INITIALIZATION
const app = express();

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
      mongoUrl: dbURI,
    }),
  })
);

// CONFIGURING MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// CONNECTING TO DB
connectDB();

// CONFIURING ROUTES AND ROUTERS
app.use("/auth", require("./resources/user/user.router"));
app.use("/api/thoughts", require("./resources/thought/thought.router"));

// PROD ENV CHECK
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// STARTING SERVER
app.listen(PORT);
