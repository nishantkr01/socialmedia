const router = require("express").Router();
const User = require("../models/User");
//Register
router.get("/register", async(req, res)=>{
    // res.send("Hey its auth routes");
    const user = await new User({
        username:"john",
        email:"john@example.com",
        password:"123456"
    });

    user.save();
    res.send("ok")
});


module.exports = router