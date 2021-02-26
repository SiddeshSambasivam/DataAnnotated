const express = require("express");
const mongoose = require("mongoose");
const cors  = require("cors");
var bodyParser = require('body-parser')

const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(cors())

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

// route middlewares
app.use("/api/user", authRoutes);

// this route is protected with token
app.use("/api/fetchData", verifyToken, fetchDataRoutes);
app.use("/api/updateData", verifyToken, updateDataRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("server is running..."));