const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const userRouter = require("../users/")
const postsRouter = require("../posts/posts-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("api/users");
server.use("api/posts", postsRouter);

module.exports = server;
