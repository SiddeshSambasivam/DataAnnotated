const mongoose = require("mongoose");

const annotationSchema = new mongoose.Schema({
    task_id:{
      type: String
    },
    task_name:{
      type: String
    },
    task_type:{
      type: String
    },
    raw_data:[String],
    annotated_data:[{}],
    labels:[String],
    date: {
      type: Date,
      default: Date.now,
    }
  })

module.exports = mongoose.model("AnnotationSchema", annotationSchema);