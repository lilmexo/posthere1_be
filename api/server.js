const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require("../users/users-router");
const postsRouter = require("../posts/posts-router");
const authRouter = require("../auth/auth-router")
const authenticate = require("../auth/auth-middleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter)
server.use("/api/posts", authenticate, postsRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" })
})

module.exports = server;
