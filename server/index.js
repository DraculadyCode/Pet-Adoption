const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const adoptionRoutes = require("./routes/adoption");

const categoryRoutes = require("./routes/category");
const petRoutes = require("./routes/pet");

const app = express();

app.use(cors());

app.use(express.json());

// ? routes
app.use("/api/category", categoryRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/adoption", adoptionRoutes);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(morgan("tiny"));

// const mongoUri = "mongodb://localhost:27017/WoofDatabase";
const mongoUri =
  "mongodb+srv://kathrinpeled:test@cluster0.xbtfe.mongodb.net/WoofDatabase?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// mongoose.connect(mongoUri, {
//   useNewUrlParser: true
//   // useUnifiedTopology: true
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB...");
// });

// mongoose.connection.on("error", (err) => {
//   console.log("Error connecting to MongoDB:", err);
// });

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
