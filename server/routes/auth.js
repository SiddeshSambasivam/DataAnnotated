const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const User = require("../model/User");
const UserData = require("../model/UserData");

const { registerValidation, loginValidation } = require("../validation");

router.post("/register", cors(), async (req, res) => {

    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const isEmailExist = await User.findOne({email: req.body.email});

    if(isEmailExist){
        return res.status(400).json({error:"Email already exists"});
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password, // hashed password
    });

    try {

        const savedUser = await user.save();
        const user_data_format = new UserData({
            user_id: savedUser._id,
            name: req.body.name,
            email: req.body.email,
        })
        try{
            const savedUserData = await user_data_format.save()
            res.json({ error: null, data: savedUser._id });
        }
        catch(error){
            res.status(400).json({ error });
        }
        
    } catch (error) {

        res.status(400).json({ error });

    }
});

router.post("/login", cors(), async (req, res) => {
    
    const { error } = loginValidation(req.query);

    if (error){
        return res.status(400).json({error: error.details[0].message})
    }
    console.log("Login Called")
    const user = await User.findOne({email: req.query.email});

    if(!user){
        return res.status(400).json({error:"Email is not registered"});
    }

    const validPassword = await bcrypt.compare(req.query.password, user.password);

    if (!validPassword){
        return res.status(400).json({error:"Incorrect password"})
    }
    // create token
    const token = jwt.sign(
        // payload data
        {
            name: user.name,
            id: user._id,
        },
        process.env.TOKEN_SECRET
    );

    res.header("auth-token", token).json({
        error: null,
        data: {
            token,
        },
    });
});

module.exports = router;
