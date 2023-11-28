const express = require('express')

const { detail } = require('../controllers/detail')

const router = express.Router()

router.get('/',detail)

module.exports = router;