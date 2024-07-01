const router = require('express').Router();
const { Users, BlogPost } = require('../../models');

router.post('/:id' , (req,res) => {
    // create comments
}
)

router.get ('/' , (req,res) => {
    // all blog posts
}
)

router.get ('/:id' , (req,res) => {
    // specific blog posts
}
)

router.put ('/:id' , (req,res) => {
    // update blog posts
}
)

router.delete ('/:id' , (req,res) => {
    // delete
}
)

module.exports = router;