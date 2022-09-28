const express = require('express')
const router = express.Router()

const controller_19110425 = require('../controllers/19110425.controller')

router.get('/:id', controller_19110425.get)

router.post('/', controller_19110425.post)

module.exports = router