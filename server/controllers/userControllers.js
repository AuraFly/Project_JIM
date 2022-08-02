const asynchHandler = require("express-async-handler");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");

const registerUser = asynchHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    const userExits = await User.findOne({ email });

    if (userExits) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({ 
        name,
        email,
        password,   
        pic,

});

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,

        });   
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }

});

const authUser = asynchHandler(async (req, res) => {
    const { email, password } = req.body;

   const user = await User.findOne({ email });

if(user && (await user.matchPassword(password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
    });

} else {
    res.status(400);
    throw new Error('Invalid Email or Password');
}

});

   

    

    



module.exports = { registerUser, authUser };