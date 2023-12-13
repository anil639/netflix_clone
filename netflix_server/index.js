const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./Routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("Server running on 8000");
});
