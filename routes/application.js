const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')

router.get('/books', applicationController.index)

module.exports = router