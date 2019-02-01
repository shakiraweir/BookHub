const Book = require('../models/Book')
// const Comment = require('../models/Comment')

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


// module.exports = {
//     index: (req, res) => {
//         Comment.find({})
//         .sort({ createdAt: -1 })
//         .limit(7)
//         .populate("user")
//         .then(comment => {
//             res.render("app/index", { comments })
//         })
//     }
// }

