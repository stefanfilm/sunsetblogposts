const router = require('express').Router();
const { Users, BlogPost, Comments } = require('../../models');

router.post('/:id' , (req,res) => {
    // create comments
}
)

router.get ('/' , (req,res) => {
    // all comments
}
)

router.get ('/:id' , (req,res) => {
    // specific comments
}
)

router.put ('/:id' , (req,res) => {
    // update comments
}
)

router.delete ('/:id' , (req,res) => {
    // delete
}
)

module.exports = router;