const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//Create Token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// Signup
const signupUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Login
const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// Get User with Sheets
const getUserWithSheets = async (req, res) => {
    const userId = req.user._id
    try {
        const user = await User.findById(userId)
            .select('-password')
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getUserWithSheets,
    signupUser,
    loginUser
}