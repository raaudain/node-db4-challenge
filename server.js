const express = require("express");
const helmet = require("helmet");

const RecipesRouter = require("./recipes/recipes-router")

const server = express();

server
    .use(helmet())
    .use(express.json())
    .use("/api/recipes", RecipesRouter);

module.exports = server;