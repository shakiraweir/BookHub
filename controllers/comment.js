const comment = require('../models/Comment')

module.exports = {
    create: (req, res) => {
        Comment.create({
            title: req.body.comment.title,
            author: req.body.comment.author,
            comment: req.body.comment.comment
        })
        .then(comment => {
            res.redirect(`comment/${comment._id}`)
        })
    },
    new: (req, res) => {
        res.render('comment/new')
    },
    show: (req, res) => {
        comment.findOne({ _id: req.params.id })
        .populate("user")
        .then(comment => {
            console.log(comment)
            res.render("comment/new", { comment })
        })
    }
}