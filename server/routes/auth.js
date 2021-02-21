const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {

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
        res.json({ error: null, data: savedUser._id });

    } catch (error) {

        res.status(400).json({ error });

    }
});

router.post("/login", async (req, res) => {

    const { error } = loginValidation(req.body);

    if (error){
        return res.status(400).json({error: error.details[0].message})
    }

    const user = await User.findOne({email: req.body.email});

    if(!user){
        return res.status(400).json({error:"Email is not registered"});
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword){
        return res.status(400).json({error:"Incorrect password"})
    }

    res.json({
        error: null,
        data: {
          message: "Login successful",
        },
    });
});

module.exports = router;
