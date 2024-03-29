const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")
const bcrypt = require("bcrypt")


// Get user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others)

    } catch(err) {
        res.status(500).json(err)
    }
})

// Updating user
router.put("/:id", async (req, res) => {
    
    if(req.body.userId === req.params.id) {

        // if we are sending a password as well
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            const updatedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = updatedPassword;
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, 
            {new: true});
            res.status(200).json(updatedUser);

        } catch(err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("You can update your account only!!");
    }
})

// Deleting User
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id)
            if(user){
                try {
                    // deleting all its posts
                    await Post.deleteMany({username: user.username})
                    await User.findByIdAndDelete(req.params.id);
    
                    res.status(200).json("User has been deleted!")
                } catch(err) {
                    res.status(500).json(err);
                }
            }
        } catch(err) {
            res.status(404).json("User not found!")
        }
    }
    else {
        res.status(500).json("You can delete your account only")
    }
})

module.exports = router