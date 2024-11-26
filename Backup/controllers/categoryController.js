const Category = require("../models/Category");

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.log(error);
    req.status(400).json(error); // Corrected from req.status to res.status
  }
};
