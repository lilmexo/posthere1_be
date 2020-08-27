

function verifyUserId(req, res, next) {
    // console.log(req.params)
    if (req.params.id == req.jwt.subject) {
        next()
    } else {
        res.status(401).json({ err: "Could not verify user" })
    }
}

module.exports = {
    verifyUserId
}