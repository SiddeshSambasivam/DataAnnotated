const router = require("express").Router();
const mongoose = require("mongoose");
const UserData = require("../model/UserData");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
);

router.post("/", cors(), (req, res) => {

    let user = req.body.user;
    UserData.findOneAndUpdate(
        {"user_id":user.user_id}, 
        user, 
        {upsert:true}, 
        function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully saved.');
        }
    );
  });
  
  module.exports = router;