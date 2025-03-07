const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    sheets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sheet'
    }]
})

//STATIC SIGNUP
userSchema.statics.signup = async function (username, password) {
    if (!username || !password) {
        throw Error('All fields must be entered')
    }

    const exists = await this.findOne(username)

    if(exists) {
        throw Error('Username already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({username, password: hash})

    return user
}

//STATIC LOGIN
userSchema.statics.login = async function (username, password) {
    const exists = await this.findOne(username)
    
    if(exists) {
        throw Error('Username already in use')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error("Incorrect Password")
    }

    return user
}

//EXPORTS
const User = mongoose.model('User', userSchema)

module.exports = User