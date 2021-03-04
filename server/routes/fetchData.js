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

router.get("/", cors(), (req, res) => {

  try{
    UserData.find({"user_id": req.user.id}, (error, results)=> {
        req.user = results[0];  
        console.log(results)
        res.json({
          error: null,
          data: {
            title: "My dashboard",
            content: "dashboard content",
            user: req.user, // token payload information
          },
        });        
    })
  }catch(err){
    res.status(400).json({ error: "Database filter error" });
  }
});

module.exports = router;