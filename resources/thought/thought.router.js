const express = require("express");
const { getAll, addOne, deleteOne, updateOne } = require("./thought.controller");
const { ensureAuth } = require("../../middleware/auth");

const router = express.Router();
router.use(ensureAuth);

router.route("/").get(getAll).post(addOne);

router.route("/:id").delete(deleteOne);

router.route("/:id").post(updateOne);

module.exports = router;
