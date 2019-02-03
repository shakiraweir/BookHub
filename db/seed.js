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
// const User = require("../models/User");

// const Post  = require("../models/Post");

// User.find({}).remove(() => {
//     Book.find({}).remove(() => {
//         Post.find({}).remove(() => {
//             let Suezette = User.create({
//                 username: "sdee",
//                 email: "sdee@mail.com",
//                 // password: "password"
//             }).then(user => {
//                 Promise.all([
//                     Book.create({
//                         title: "The Happiness Project",
//                         author: "Gretchin Rubin",
//                         subtopic: "personal development",
//                         description: "a report on the results of testing ideas about happiness from ancient times, scientific research, popular culture and common beliefs",
//                         comments: "approaches the idea of being happy in such an analytical and list-making, action-taking way. I understand the world more in this way myself, so I found this book really inspiring and helpful.",
//                         complete: Boolean,
//                         author: user._id
//                     }).then(book => {
//                         user.books.push(book);
//                     }),
//                     ]).then(() => {
//                         user.save(err => console.log(err));
//                         });
//                     });

//             let Mary = User.create({
//                 username: "micilda",
//                 email: "micilda@gmail.com",
//                 password: "password"
//             }).then(user => {
//                 Promise.all([
//                     Book.create({
//                         title: "Meaningful Work",
//                         author: "Shawn Askinosie",
//                         subtopic: "work-life balance",
//                         description: "Insights into doing work that reflects one's values and purpose in life",
//                         comments: "Geared toward small business owners. Encourages others to seek meaningful work or add meaning to work they already do. Focus on meditation, creating a mission statement or big goal.",
//                         complete: Boolean,
//                         author: user._id
//                     }).then(book => {
//                         user.books.push(book);
//                     }),
//                     ]).then(() => {
//                         user.save(err => console.log(err));
//                         });
//                     });
//                 });
//             });
//         });
            
