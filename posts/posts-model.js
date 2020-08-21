const db = require("../database/dbConfig");

module.exports = {
    add,
    find,
    findAllPosts,
    findBy,
    findById,
    deletePost
}

function findAllPosts() {
    return db("posts")
}

function find() {
    return db("posts").select("id", "title").orderBy("id")
}

function findBy(filter) {
    return db("posts").where(filter).orderBy("id")
}

async function add(post) {
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