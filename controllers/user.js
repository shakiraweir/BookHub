const User = require('../models/User')
const Book = require('../models/Book')
const Comment = require('../models/Comment')

const passport = require('passport')

module.exports = {
	createSignup: (req, res, next) => {
		var signupStrategy = passport.authenticate('local-signup', {
			successRedirect: '/',
			failureRedirect: '/user/signup',
			failureFlash: true
		})
		return signupStrategy(req, res, next)
	},
	signup: (req, res) => {
		res.render('user/signup', {message: req.flash('signupMessage')})
	},
	login: (req, res) => {
		res.render('user/login', {message: req.flash('loginMessage')})
	},
	createLogin: (req, res, next) => {
		var loginStrategy = passport.authenticate('local-login', {
			successRedirect: '/',
			failureRedirect: '/user/login',
			failureFlash: true
		})
		return loginStrategy(req, res, next)
	}
}