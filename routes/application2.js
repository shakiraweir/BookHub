const express = require('express')
const router = express.Router()
const application2Controller = require('../controllers/application2')

router.get('/view', application2Controller.index)

module.exports = router