const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const Post = new Schema({
    title: [String],
    author: [String],
    comment: [String],
    createdAt: {
      type: Date,
      default: Date.now()
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  })

  module.exports = mongoose.model("Post", Post) 

