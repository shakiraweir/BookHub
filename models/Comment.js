const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const Comment = new Schema({
    title: [String],
    author: [String],
    comment: [String],
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  });

  module.exports = mongoose.model("Comment", Comment) 

