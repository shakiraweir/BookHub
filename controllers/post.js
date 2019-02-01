const Post = require('../models/Post')

module.exports = {
    create: (req, res) => {
        Post.create({
            title: req.body.post.title,
            author: req.body.post.author,
            comment: req.body.post.comment
        })
        .then(post => {
            res.redirect(`post/${post._id}`)
        })
    },
    new: (req, res) => {
        res.render('post/new')
    },
    show: (req, res) => {
        Post.findOne({ _id: req.params.id })
        .populate("user")
        .then(post => {
            console.log(post)
            res.render("post/new", { post })
        })
    }
}