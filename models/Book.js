const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Book = new Schema({
	title: String,
	author: String,
	subtopic: String,
	description: String,
	comment: String,
	createdAt: {
		type: Date,
		default: Date.now()
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
})



module.exports = mongoose.model("Book", Book)