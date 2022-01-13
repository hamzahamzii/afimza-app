const express = require("express");
const passport = require("passport");
const router = express.Router();
const bodyParser = require("body-parser");
const { HOME } = require("../../globals");
const { ensureAuth } = require("../../middleware/auth");
const cookieParser = require("cookie-parser");

router.use(bodyParser.json());
router.use(cookieParser());

router.get("/validate", ensureAuth, (req, res) => {
  res.json(req.user);
});

// @desc    Auth with Google
// @route   GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("hi", req.user);
    res.redirect(HOME);
  }
);

// @desc    Logout user
// @route   /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  console.log(req.user);
  res.json({ message: "user logged out" });
});

module.exports = router;
