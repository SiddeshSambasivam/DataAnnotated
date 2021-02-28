const router = require("express").Router();
const mongoose = require("mongoose");
const UserData = require("../model/UserData");
const cors = require("cors");

const dotenv = require("dotenv");
const JSON5 = require('json5')


dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
);

router.post("/", cors(), (req, res) => {

    let user_data = JSON5.parse(req.header("data"))
    
    UserData.findOneAndUpdate(
        {"user_id":user_data.user.user_id}, 
        user_data.user, 
        {upsert:true}, 
        function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send({"State":'Succesfully saved.'});
        }
    );
    
  });
  
  module.exports = router;