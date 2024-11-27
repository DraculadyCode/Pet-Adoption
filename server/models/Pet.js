const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    imageLabel: {
      type: String
    },
    additionalImages: [{ type: String }],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  },
  {
    timestamps: true
  }
);

module.exports = pet = mongoose.model("pet", petSchema);
