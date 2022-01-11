const express = require("express");
const { getAll, addOne, deleteOne } = require("./thought.controller");

const router = express.Router();

router.route("/").get(getAll).post(addOne);

router.route("/:id").delete(deleteOne);

module.exports = router;
