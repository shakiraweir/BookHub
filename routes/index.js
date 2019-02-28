const express = require('express')
const router = express.Router()

// router.use('/home', require('./application'))
// router.use('/post', require('./application2'))
router.use('/', require('./application3'))


router.use('/user', require('./user'))
router.use('/book', require('./book'))
router.use('/post', require('./post'))

router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router