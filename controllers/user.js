const User = require('../models/User')
// const Book = require('../models/Book')
// const Post = require('../models/Post')

const passport = require('passport')

module.exports = {
	createSignup: (req, res, next) => {
		// call authenticate method and tell passport which strategy to use
		var signupStrategy = passport.authenticate('local-signup', {
			successRedirect: '/home/books',
			failureRedirect: '/user/signup',
			failureFlash: true
		})
		return signupStrategy(req, res, next)
	},
	signup: (req, res) => {
		res.render('user/signup', {message: req.flash('signupMessage')})
	},
	createLogin: (req, res, next) => {
		var loginStrategy = passport.authenticate('local-login', {
			successRedirect: '/home/books',
			failureRedirect: '/user/login',
			failureFlash: true
		})
		return loginStrategy(req, res, next)
	},
	login: (req, res) => {
		res.render('user/login', {message: 
		req.flash('loginMessage')})
	},
	logout: (req, res) => {
		req.logout();
		res.redirect('/')
	}
}