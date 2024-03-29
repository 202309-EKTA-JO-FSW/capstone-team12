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

router.post('/createTicket', authMiddleware, adminMiddleware, createTicket)// adminMiddleware,authMiddleware
router.get('/getTickets', authMiddleware, getTickets)//authMiddleware
router.get('/getTickets/:id', authMiddleware, getTicket)//authMiddleware
router.delete('/deleteTicket/:id', authMiddleware, deleteTicket)//authMiddleware
router.put('/updateTicket/:id', authMiddleware, adminMiddleware, updateTicket)///adminMiddleware,authMiddleware

module.exports = router