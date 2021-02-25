const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    annotation_data:[mongoose.Mixed],
  });

module.exports = mongoose.model("UserData", userData);