const express = require('express')
const router = express.Router()
const adminMiddleware = require('../middleware/adminMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const {
    createTicket,
    getTickets,
    getTicket,
    deleteTicket,
    updateTicket,
} = require('../controllers/ticketController')

router.post('/createTicket', createTicket)// adminMiddleware,authMiddleware
router.get('/getTickets', getTickets)
router.get('/getTickets/:id', getTicket)
router.delete('/deleteTicket/:id', deleteTicket)
router.put('/updateTicket/:id', updateTicket)///adminMiddleware,authMiddleware

module.exports = router