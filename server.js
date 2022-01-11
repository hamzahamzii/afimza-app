// LIB IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// GLOBAL VARS
const PORT = process.env.PORT || 8000;
const dbURI =
  process.env.MONGODB_URI ||
  "mongodb+srv://hamzahamzii:Blah-12345@afimza.loxun.mongodb.net/afimza?retryWrites=true&w=majority";

// APP INITIALIZATION
const app = express();

// CONFIGURING MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// CONNECTING TO DB
mongoose
  .connect(dbURI)
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

// ROUTES
const thoughtsRouter = require("./resources/thought/thought.router");
app.use("/thoughts", thoughtsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// STARTING SERVER
app.listen(PORT);
