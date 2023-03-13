const books = require('express').Router()

books.get('/', (req, res) => {
  res.send('Hello world from books API!')
})

module.exports = books