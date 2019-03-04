const Book = require('../models/Book')

module.exports = {
    index: (req, res) => {
        Book.find({})
        .sort({ createdAt: -1 })
        .limit(7)
        .populate("user")
        .then(books => {
            res.render("app/index", { books })
        })
    }
}

// // Get
// fetch('/artists.json')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   })

