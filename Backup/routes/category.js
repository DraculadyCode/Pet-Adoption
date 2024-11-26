const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/all", categoryController.getAll);

module.exports = router;
