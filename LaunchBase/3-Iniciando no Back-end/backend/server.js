const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const posts = require("./data")

server.use(express.static('../frontend'))

server.set("view engine", "njk")

nunjucks.configure("../frontend", {
    express: server
})

server.get("/", function (req, res) {
    return res.render("about")
})

server.get("/rocketseat", function (req, res) {
    return res.render("rocketseat")
})

server.get("/contents", function (req, res) {
    return res.render("contents")
})

server.use(function (req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function () {
    console.log("Server is running")
})