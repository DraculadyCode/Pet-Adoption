const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const categoryRoutes = require("./routes/category");
const petRoutes = require("./routes/pet");

const app = express();

app.use(cors());

app.use(express.json());

// ? routes
app.use("/api/category", categoryRoutes);
app.use("/api/pets", petRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(morgan("tiny"));

const mongoUri = "mongodb://localhost:27017/WoofDatabase";

mongoose.connect(mongoUri, {
  useNewUrlParser: true
  // useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
