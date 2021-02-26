const express = require("express");
const mongoose = require("mongoose");

const app = express();
const dotenv = require("dotenv");

dotenv.config();

// APIs
// login (R)
// signup (C)
// fetch user data (R)
// Update the annotation data (U)

mongoose.connect(
process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db")
  }
);

// import routes
const authRoutes = require("./routes/auth");
const fetchDataRoutes = require("./routes/fetchData");
const updateDataRoutes = require("./routes/updateData");
const verifyToken = require("./routes/validate-token");

// middlewares
app.use(express.json()); // for body parser

// route middlewares
app.use("/api/user", authRoutes);

// this route is protected with token
app.use("/api/fetchData", verifyToken, fetchDataRoutes);
app.use("/api/updateData", verifyToken, updateDataRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server is running..."));