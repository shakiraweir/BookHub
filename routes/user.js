const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

//GET /signup
// display signup form
router.get('/signup', userController.signup)

//POST /signup
// receive params sent by the form
router.post('/signup', userController.createSignup)

//GET /login
router.get('/login', userController.login)

//POST /login
router.post('/login', userController.createLogin)

//GET /logout
router.get('/logout', userController.logout)

//GET /secret
// Only allow authenticated users to access certain resources
router.get('/secret', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('secret')
    }
    else {
        res.redirect('/home')
    }
})

module.exports = router