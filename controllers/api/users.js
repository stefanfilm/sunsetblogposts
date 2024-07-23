const router = require('express').Router();
const { Users } = require('../../models');

router.post('/' , async (req,res) => {
    // create comments
    const newUser = await Users.create(req.body)
    res.json(newUser)
}
)

router.post ('/login' , async (req,res) => {
    const user = await Users.findOne({
        where: {
            email: req.body.email
        },
      })
      if (!user) {
        res.status(400).json({ message: 'No user found with this email address' })
      }
      const validPassword = user.checkPassword(req.body.password)
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password' })
      }
      req.session.save(() => {
        req.session.user_id = user.id
        req.session.logged_in = true
        res.json({ user: user, message: 'You are now logged in!' })
      })
})

router.put ('/:id' , async (req,res) => {
    // update comments
    const user = await Users.update(req.body, {
        where: {
         id: req.params.id
        },
      })
      res.json(user)
}
)

router.delete ('/:id' , async (req,res) => {
    // delete
    const user = await Users.destroy({
        where: {
          id: req.params.id
        },
      })
      res.json(user)
}
)

module.exports = router;