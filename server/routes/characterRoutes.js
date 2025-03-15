const express = require('express')
const cors = require('cors')
const requireAuth = require('../middleware/requireAuth')
const {
    getAllCharacters,
    getSingleCharacter,
    createCharacter,
    deleteCharacter,
    updateCharacter
} = require('../controllers/characterControllers')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', requireAuth, getAllCharacters)
router.get('/:id', requireAuth, getSingleCharacter)
router.post('/', requireAuth, createCharacter)
router.delete('/:id', requireAuth, deleteCharacter)
router.patch('/:id', requireAuth, updateCharacter)

module.exports = router