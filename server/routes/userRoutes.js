const express = require('express')
const cors = require('cors')
const requireAuth = require('../middleware/requireAuth')
const {
    getUserWithSheets,
    signupUser,
    loginUser
} = require('../controllers/userControllers')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.get('/data', requireAuth, getUserWithSheets)
router.post('/signup', signupUser)
router.post('/login', loginUser)

module.exports = router