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

    console.log(req.query)
    const user = JSON.parse(req.query.user)
    
    res.send("success")
    // UserData.findOneAndUpdate(
    //     {"user_id":user.user_id}, 
    //     user, 
    //     {upsert:true}, 
    //     function(err, doc) {
    //         if (err) return res.send(500, {error: err});
    //         return res.send('Succesfully saved.');
    //     }
    // );
  });
  
  module.exports = router;