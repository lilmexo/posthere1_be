const router = require("express").Router();
const dbPosts = require("./posts-model");
const { verifyUserId } = require("./posts-service");


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




router.post("/:id", verifyUserId, (req, res) => {
    const newPost = req.body;
    dbPosts.addPost(newPost)
        .then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(500).json({ err, message: "Couldn't create post" })
        })
})

router.put("/:id", verifyUserId, (req, res) => {
    const { id } = req.params;
    const updatePost = req.body;
    dbPosts.updatePost(updatePost, id)
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json({ err, message: "Couldn't create post" })

        })
})

router.delete("/deletePost/:id", (req, res) => {
    const { id } = req.params;
    dbPosts.deletePost(id)

        .then(data => {
            res.status(200).json({ "deleted successfully": data })
        }).catch(err => {
            res.status(500).json({ err, message: "Unable to delte" })
        })


})

module.exports = router;