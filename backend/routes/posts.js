const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")

// CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {
            try{
                const savedPost = await Post.findByIdAndUpdate(req.body.id, {
                    $set: req.body,
                }, {new: true})
                
                res.status(200).json(savedPost)
            } catch(err) {
                res.status(500).json(err)
            }
        }
        else {
            res.status(401).json("You can update your posts only!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE POST 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try {
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("post has been deleted")
            } catch(err) {
                res.status(500).json(err)
            }
        }
        else {
            res.status(401).json("You can delete your posts only!")
        }

    } catch(err) {
        res.status(500).json(err)
    }
})

// GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)

    } catch(err) {
        res.status(500).json(err)
    }
})

// GET ALL POSTS 
router.get("/", async (req, res) => {
    try {
        const username = req.query.user;
        const category = req.query.cat;

        let posts;
        if(username) {
            posts = await Post.find({username: username})
        }
        else if(category){
            posts = await Post.find({
                categories: {
                    $in: [category]
                }
            })
        }
        else {
            posts = await Post.find();
        }

        res.status(200).json(posts)

    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router