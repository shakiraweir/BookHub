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
    // update: (req, res) => {
    //     let { description } = req.body.book
    //     Book.findOneAndUpdate(
    //         { _id: req.params.id}, 
    //         {$set:{description:description}})
    //     .then(() => {res.redirect('/')})
    // },
    // update: (req, res) => {
    //     let { description } = req.body;
    //     Book.findOne({ _id: req.params.id }).then(book => {
    //       book.comments.push({
    //         title,
    //         author,
    //         subtopic,
    //         description,
    //         comment, 
    //         complete,
    //         user: req.user._id
    //       });
    //       book.save(err => {
    //         res.redirect(`/book/${book._id}`);
    //       });
    //     });
    //   },
    update: (req, res) => {
        true
        // req.body.complete = req.body.complete ? true : false
        Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
          book => {
            res.redirect(`/book/${book._id}`);
          }
        );
      },
    delete: (req, res) => {
        Book.findOneAndRemove({ _id: req.params.id })
        .then( () => {
            res.redirect('/')
        })
    },
    edit: (req, res) => {
        res.render('book/edit', {id: req.params.id})
    }
}