const Thought = require("./thought.model");

const addOne = async (req, res) => {
  const thought = await Thought.create(req.body);
  res.json(thought);
};

const getAll = async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const deleted = await Thought.findByIdAndDelete(id);
  res.json({ deleted, message: "del done" });
};

module.exports = {
  addOne,
  getAll,
  deleteOne,
};
