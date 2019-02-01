const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')

// CRUD
router.post('/', bookController.create)
router.get('/new', bookController.new)

//show new books
router.get('/:id', bookController.show)

//update the book
router.put('/:id', bookController.update)

//edit the book
router.get('/:id/edit', bookController.edit)

//delete the book
router.delete('/:id', bookController.delete)

module.exports = router

