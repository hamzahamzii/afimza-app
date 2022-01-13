const express = require("express");
const { getAll, addOne, deleteOne } = require("./thought.controller");
const { ensureAuth } = require("../../middleware/auth");

const router = express.Router();
router.use(ensureAuth);

router.route("/").get(getAll).post(addOne);

router.route("/:id").delete(deleteOne);

module.exports = router;
