const router = require("express").Router();
const dbUsers = require("./users-model");

//get user 

router.get("/", (req, res) => {
    dbUsers.find()
        .then(users => {
            res.status(200).json({ data: users, jwt: req.jwt, it: "worked!" })
        })
        .catch(err => res.send(err))
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await dbUsers.findById(id)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ err: "Couldn't find the user" })
        }
    } catch (err) {
        res.status(500).json({ err: "Server Error" });
    }

})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    dbUsers.deleteUser(id)

        .then(data => {
            res.status(200).json({ "deleted successfully": data })
        }).catch(err => {
            res.status(500).json({ err, message: "Unable to delte" })
        })


})


module.exports = router; 