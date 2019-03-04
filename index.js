const express = require("express");
const app = express();
const flash = require('connect-flash')
const hbs = require("hbs");
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ useNewUrlParser: true }))
app.use(methodOverride("_method"))

app.set("view engine", "hbs");
app.use(express.static("public"));

app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}))
app.use(flash())

// Use passport for user authentication
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

// Access the user object globally (so user can logout at anytime)
app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})
app.use(require("./routes/index.js"));


// install axios 

// // Get
// fetch('/artists.json')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// // Post
// fetch('/artists.json', {
//   method: 'POST',
//   body: JSON.stringify({
//     artist: {
//       name: 'Limp Bizkit',
//       nationality: 'USA',
//       photo_url: 'http://nerdist.com/wp-content/uploads/2014/12/limp_bizkit-970x545.jpg'
//     }
//   })
// }).then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// })

// // Put
// fetch('/artists/6.json', {
//   method: 'PUT',
//   body: JSON.stringify({
//     artist: {
//       name: 'Robert Goulet',
//       nationality: 'British',
//       photo_url: 'http://media.giphy.com/media/u5yMOKjUpASwU/giphy.gif'
//     }
//   })
// }).then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// })

// // Delete
// fetch('/artists/4.json', {
//   method: 'DELETE'
// }).then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// })

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

