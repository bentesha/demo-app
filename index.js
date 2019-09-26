const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))
app.use(express.json())

const router = express.Router()

const routes = require('./routes')

app.use(routes)
app.use((error, request, response, next) => {
  if (error.isJoi) {
    return response.send('Sorry, you have validation error!')
  }
  next(error)
})

app.listen(8080, () => console.log('Listening on port:', 8080))
