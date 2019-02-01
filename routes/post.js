const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')

// CR
router.post('/', postController.create)
router.get('/new', postController.new)
router.get('/:id', postController.show)



module.exports = router

// check this route