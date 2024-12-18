var express = require('express')
var router = express.Router()
const { list, create, update, deleteH} = require('./hotelService')
router.get('/list', list)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteH)

module.exports = router