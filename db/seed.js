const mongoose  = require("../models/Book");
const seeds = require("./seedData")

const Book = mongoose.model('Book')

Book.remove({})
  .then(_ => {
    Book.collection.insert(seeds)
      .then(books => {
        console.log(seeds)
        process.exit()
      })
      .catch(err => {
        console.log(err)
      })
  })
