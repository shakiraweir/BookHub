const express = require('express')
const router = express.Router()
const application3Controller = require('../controllers/application3')

router.get('/', application3Controller.index)

module.exports = router