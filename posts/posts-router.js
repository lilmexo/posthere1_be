const router = require("express").Router();
const dbPosts = require("./posts-model");

//get all posts 
router.get("/", async (req, res) => {
    try {
        const data = await dbPosts.findAllPosts();
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ err: "Couldn't find any posts" })
        }
    } catch (err) {
        res.status(500).json({ err: "server error" })
    }
})