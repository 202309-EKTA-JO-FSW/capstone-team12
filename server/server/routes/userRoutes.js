const express = require('express')
const router = express.Router()
const {
  signup,
  login,
  getMe,
  signout,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/signup', signup)
router.post('/login', login)
router.get('/me', protect, getMe)
router.post('/signout', signout)

module.exports = router