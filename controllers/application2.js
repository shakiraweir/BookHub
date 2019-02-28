const Post = require('../models/Post')

module.exports = {    
    index: (req, res) => {
        Post.find({})
        .sort({ createdAt: -1 })
        .limit(7)
        .populate("user")
        .then(posts => {
            res.render("app/index2", { posts })
        })
    }
}