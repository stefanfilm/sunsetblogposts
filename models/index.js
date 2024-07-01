const Users = require("./users")
const BlogPost = require("./blogpost")
const Comments = require("./comments")

BlogPost.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "cascade"
})

BlogPost.hasMany(Comments, {
    foreignKey: "postId",
    onDelete: "cascade"
})

Comments.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "cascade"
})

module.exports = {BlogPost, Users, Comments};