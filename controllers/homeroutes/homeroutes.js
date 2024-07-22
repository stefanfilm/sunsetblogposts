const router = require('express').Router();
const { Users, BlogPost } = require('../../models');

router.get('/' , (req,res) => {
    res.render('home')
})

router.get('/login' , (req,res) => {
    res.render('login')
})

router.get('/register' , (req,res) => {
    res.render('register')
})

module.exports = router;