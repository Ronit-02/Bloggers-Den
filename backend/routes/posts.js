const router = require("express").Router()
const Post = require("../models/Post")

// Create Post
router.post("/", async (req, res) => {
    res.json("hi")
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json(err)   
    }
})

// Update Post
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

// Delete Post
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

// Get a Post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)

    } catch(err) {
        res.status(500).json(err)
    }
})

// Get all posts 
router.get("/", async (req, res) => {
    try {
        
        const posts = await Post.find();

        // const username = req.query.user;
        // const category = req.query.cat;

        // if(username) {
        //     posts = await Post.find({username: username})
        // }
        // else if(category){
        //     posts = await Post.find({
        //         categories: {
        //             $in: [category]
        //         }
        //     })
        // }

        res.status(200).json(posts)

    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router