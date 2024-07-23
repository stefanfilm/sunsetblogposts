const router = require('express').Router();
const { Users, BlogPost, Comments } = require('../../models');

router.post('/' , async (req,res) => {
    // create comments
        // create comments
        const newComment = await Comments.create(req.body)
        res.json(newComment)
}
)

router.post ('/comments/:postId' , async (req,res) => {
    // all comments
    const newComment = await Comments.create({...req.body, userId: req.session.user_id, postId: req.params.postId })
    res.json(newComment)

})


router.get ('/:id' , async (req,res) => {
    // specific comments
    const newComment = await Comments.findOne({
        where: {
          id: req.params.id
        },
      })
      res.json(newComment)
}
)

router.put ('/:id' , async (req,res) => {
    // update comments
    const newComment = await Comments.update(req.body, {
        where: {
         id: req.params.id
        },
      })
      res.json(newComment)
}
)

router.delete ('/:id' , async (req,res) => {
    // delete
    const newComment = await Comments.destroy({
        where: {
          id: req.params.id
        },
      })
      res.json(newComment)
}
)

module.exports = router;