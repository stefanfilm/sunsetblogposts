const user = require("./users.js")
const blogPost = require("./blogposts.js")
const comments = require("./comments.js")
const router = require("express").Router()
router.use("/users" , user)
router.use("/blogposts", blogPost)
router.use("/comments", comments)
module.exports = router