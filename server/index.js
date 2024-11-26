const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const categoryRoutes = require("./routes/category");

const app = express();

app.use(cors());

app.use(express.json());

// ? routes
app.use("/api/category", categoryRoutes);

const mongoUri = "mongodb://localhost:27017/WoofDatabase";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
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
