const Book = require('../models/Book')

module.exports = {
    create: (req, res) => {
        Book.create({
            title: req.body.book.title,
            author: req.body.book.author,
            subtopic: req.body.book.subtopic,
            description: req.body.book.description,
            comment: req.body.book.comment
        })
        .then(book => {
            res.redirect(`book/${book._id}`)
        })
    },
    new: (req, res) => {
        res.render('book/new')
    },
    show: (req, res) => {
        Book.findOne({ _id: req.params.id })
        .populate("user")
        .then(book => {
            console.log(book)
            res.render("book/new", { book })
        })
    },
    edit: (req, res) => {
        Book.findOne({ _id: req.params.id })
        .then(book=> {
            res.render('book/edit', book )
          })
      },
      update: (req, res) => {
        Book.findOneAndUpdate(
            { _id: req.params.id }, 
            {$set:{
                title: req.body.book.title,
                author: req.body.book.author,
                subtopic: req.body.book.subtopic,
                description: req.body.book.description,
                comment: req.body.book.comment
            }}
            )
        .then(book => {res.redirect('/')})
    },
    delete: (req, res) => {
        Book.findOneAndRemove({ _id: req.params.id })
        .then( () => {
            res.redirect('/')
        })
    }
}