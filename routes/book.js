const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')

// CRUD
router.post('/', bookController.create)
router.get('/new', bookController.new)

//show new books
router.get('/:id', bookController.show)

//edit the book
router.get('/edit/:id', bookController.edit)
//update the book
router.put('/edit/:id', bookController.update)

//delete the book
router.delete('/:id', bookController.delete)


module.exports = router

