// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
const PORT = process.env.PORT
const app = express()
require('dotenv').config()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// CONTROLLERS
const bookController = require('./controllers/books-controller')
app.use('/books', bookController)

// ROUTES
app.get('/', (req,res) => {
    res.send('test')
})

// LISTEN
app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})

