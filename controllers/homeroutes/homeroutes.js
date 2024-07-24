const router = require('express').Router();
const { where } = require('sequelize');
const { Users, BlogPost, Comments } = require('../../models');

router.get('/' , (req,res) => {
    res.render('home')
})

router.get('/login' , (req,res) => {
    res.render('login')
})

router.get('/register' , (req,res) => {
    res.render('register')
})

router.get('/dashboard' , async (req,res) => {
    const blogposts = await BlogPost.findAll({
        include: [Users]
    })
    const blogs = blogposts.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('dashboard', {
        blogs
    })
})

router.get('/newblog' , (req,res) => {
    res.render('newblog')
})

router.get('/blogpost/:id' , async (req,res) => {
    const blogPostData = await BlogPost.findOne({
        where: {
            id: req.params.id
        }, include: [Users, {
            model: Comments,
        include: [Users]
        }]

    })
    const blog = blogPostData.get({ plain: true });
    res.render('blogpost', {blog})
})

module.exports = router;