const router = require("express").Router();
const mongoose = require("mongoose");
const UserData = require("../model/UserData");

const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
);

router.post("/", (req, res) => {

    UserData.findOneAndUpdate(
        {"user_id": req.body.user.user_id}, 
        req.body.user, 
        {upsert:true}, 
        function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully saved.');
        }
    );
  });
  
  module.exports = router;