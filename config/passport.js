const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

module.exports = function(passport) {
  // serialize user.id to save it to their session
  passport.serializeUser(function(user, callback) {
    callback(null, user.id)
  })
  // check whether a user is logged in
  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user)
    })
  })
  // Declare strategy for signup
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback){
    // Implement custom logic to signup a user
    // Find a user with this e-mail
    User.findOne({'local.email': email}, function(err, user) {
      if (err) return callback(err)
      // If there is already a user with this email
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used.'))
      } else {
        // There is no email registered with this email
        // Create a new user
        let newUser = new User()
        newUser.local.email = email
        newUser.local.password = newUser.encrypt(password)

        newUser.save(function(err) {
          if (err) throw err
          return callback(null, newUser)
        })
      }
    })
  }))
  
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {
    // Search for a user with this email
    User.findOne({'local.email': email}, function(err, user) {
      if (err) return callback(err)

      // If no user is found
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No user found'))
      }
      // Wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Oops, wrong password.'))
      }
      return callback(null, user)
    })
  }))
}