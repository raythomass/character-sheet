const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Database Connected, Listening on Port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    });
    