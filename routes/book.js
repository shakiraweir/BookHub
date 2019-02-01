const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')

// CRUD
router.post('/', bookController.create)
router.get('/new', bookController.new)

//show new books
router.get('/:id', bookController.show)

//update the book
router.patch('/:id', bookController.update)

//delete the book
router.delete('/:id', bookController.delete)

//edit the book
router.get('/:id/edit', bookController.edit)

module.exports = router

