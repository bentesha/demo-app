const express = require('express')
const morgan = require('morgan')

const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('tiny'))
}
app.use(express.json())

const routes = require('./routes')

app.use(routes)
app.use((error, request, response, next) => {
  if (error.isJoi) {
    return response.send('Sorry, you have validation error!')
  }
  next(error)
})

module.exports = app