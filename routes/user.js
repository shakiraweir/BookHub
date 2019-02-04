const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

//GET /signup
router.get('/signup', userController.signup)

//POST /signup
router.post('/signup', userController.createSignup)

//GET /login
router.get('/login', userController.login)

//POST /login
router.post('/login', userController.createLogin)

//GET /logout
// router.get('/logout', userController.logout)

module.exports = router