const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hureeeee");
});

app.use("/api/user", userRoutes);

//const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`app running on 5000`.yellow.bold));
