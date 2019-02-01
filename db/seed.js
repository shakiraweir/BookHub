const User = require("../models/User");
const Book  = require("../models/Book");
const Post  = require("../models/Post");

// User.find({}).remove(() => {
//     Book.find({}).remove(() => {
//         Comment.find({}).remove(() => {
//             let Kaitlyn = User.create({
//                 email: "kwatts@gmail.com",
//                 password: createPassword("password")
//             }).then(user => {
//                 Promise.all([
//                 Book.create({
//                     title: "The Happiness Project",
//                     author: "Gretchin Rubin",
//                     subtopic: "Happiness and self-fulfillment",
//                     description: "Gives advice on practical ways to become happier",
//                     comments: "",
//                     complete: Boolean,
//                     author: user._id
//                 }).then(tweet => {
//                     user.tweets.push(tweet);
//                 }),
//                 Tweet.create({
//                     content: "That's all, folks!",
//                     author: user._id
//                 }).then(tweet => {
//                     user.tweets.push(tweet);
//                 })
//                 ]).then(() => {
//                 user.save(err => console.log(err));
//                 });
//             });
//         User.create({
//             username: "kwatts",
//             email: "test@fake.com",
//             password: "password"
//         })

// Book.create({
//     title: "The Happiness Project",
//     author: "Gretchin Rubin",
//     subtopic: "Happiness and self-fulfillment",
//     description: "Gives advice on practical ways to become happier"
//     comments: String,
//     complete: Boolean,
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
//
