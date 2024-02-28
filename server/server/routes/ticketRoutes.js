const express = require('express')
const router = express.Router()
const adminMiddleware = require('../middleware/adminMiddleware')
const {
    createTicket,
    getTickets,
    getTicket,
    deleteTicket,
    updateTicket,
} = require('../controllers/userController')

router.post('/createTicket', adminMiddleware, createTicket)
router.get('/getTickets', getTickets)
router.get('/getTickets/:id', getTicket)
router.delete('/deleteTicket/:id', deleteTicket)
router.put('/updateTicket/:id', adminMiddleware, updateTicket)///

module.exports = router