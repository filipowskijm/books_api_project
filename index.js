// DEPENDENCIES
const express = require('express')

// CONFIGURATION
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
app.listen(3000, () => {
    console.log('Listening on port:')
})

module.exports = app