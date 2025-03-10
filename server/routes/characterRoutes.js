const express = require('express')
const cors = require('cors')
const requireAuth = require('../middleware/requireAuth')
const { getAllCharacters, createCharacter } = require('../controllers/characterControllers')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', requireAuth, getAllCharacters)
router.post('/', requireAuth, createCharacter)

module.exports = router