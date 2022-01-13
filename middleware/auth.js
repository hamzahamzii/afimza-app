const { HOME } = require("../globals");

module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401);
      res.send({ error: "Unauthorized" });
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.status(401);
      res.send({ error: "Unauthorized" });
    }
  },
};
