const router = require('express').Router();
const { Users, BlogPost } = require('../../models');

router.post('/' , async (req,res) => {
    const blogData = { ...req.body, userId: req.session.user_id }
    // create blogposts
    const newBlog = await BlogPost.create(blogData)
    res.json(newBlog)
}
)

router.get ('/' , async (req,res) => {
    // all blog posts
    const newBlog = await BlogPost.findAll({
      })
      res.json(newBlog)
}
)

router.get ('/:id' , async (req,res) => {
    // specific blog posts
    const newBlog = await BlogPost.findOne({
        where: {
          id: req.params.id
        },
      })
      res.json(newBlog)
}
)

router.put ('/:id' , async (req,res) => {
    // update blog posts
    const newBlog = await BlogPost.update(req.body, {
        where: {
         id: req.params.id
        },
      })
      res.json(newBlog)
}
)

router.delete ('/:id' , async (req, res) => {
    // delete
    const newBlog = await BlogPost.destroy({
        where: {
          id: req.params.id
        },
      })
      res.json(newBlog)
})


module.exports = router;