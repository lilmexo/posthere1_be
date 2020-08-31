const router = require("express").Router();
const dbPosts = require("./posts-model");
const { verifyUserId } = require("./posts-service");

const axios = require('axios');

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
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await dbPosts.findByUserId(id)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ err: "Couldn't find the post" })
        }
    } catch (err) {
        res.status(500).json({ err: "Server Error" });
    }

})




router.post("/:id", verifyUserId, (req, res) => {
    const sendDs = {
        title: req.body.title,
        text: req.body.text,
        results: req.body.results
    }

    axios.post("https://subreditpredictor.herokuapp.com/suggestions", sendDs)
        .then(sug => {
            const sugg = sug.data
            const userId = req.params.id;

            const newPost = {
                user: userId, title: req.body.title,
                text: req.body.text
            }
            return dbPosts.addPost(newPost)
                .then(data => {

                    res.status(201).json({ data, sugg })
                }).catch(err => {
                    res.status(500).json({ err, message: "Couldn't create post" })
                })
        })

    // let suggest = suggestion(sendDs)



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

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    dbPosts.deletePost(id)

        .then(data => {
            res.status(200).json({ "deleted successfully": data })
        }).catch(err => {
            res.status(500).json({ err, message: "Unable to delte" })
        })


})

module.exports = router;