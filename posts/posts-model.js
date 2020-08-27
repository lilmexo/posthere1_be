const db = require("../database/dbConfig");

module.exports = {
    addPost,
    find,
    findAllPosts,
    findBy,
    findById,
    updatePost,
    deletePost
}

function findAllPosts() {
    return db("posts")
}

function find() {
    return db("posts").select("posts.id", "posts.title", "posts.text", "users.username as name").join("users", "posts.user", "=", "users.id").orderBy("id")
}

function findBy(filter) {
    return db("posts").where(filter).orderBy("id")
}

async function addPost(post) {
    try {
        const [id] = await db("posts").insert(post, "id")
        return findById(id)
    } catch (error) {
        throw error
    }
}


function findById(id) {
    return db("posts").where({ id }).first();
}

function updatePost(updatepost, id) {
    return db("posts")
        .where({ id: id })
        .first()
        .update(updatepost)
        .then(() => {
            return db("posts").where({ id: id })
        })
}

function deletePost(id) {
    return db("posts")
        .where({ id: id })
        .then((removedPost) => {
            return db("posts")
                .where({ id: id })
                .first()
                .del()
                .then(() => {
                    return removedPost
                })
        })
}