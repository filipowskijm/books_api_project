// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// CONTROLLERS
const bookController = require('./controllers/books-controller')
app.use('/books', bookController)

// ROUTES
app.get('/', (req,res) => {
    res.send('test')
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log('Listening on port:', process.env.PORT)
})

module.exports = app