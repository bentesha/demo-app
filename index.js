const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

const router = express.Router()

router.get('/', (request, response, next) => {
  response.send('Hello There!')
})

app.use(router)

app.listen(8080, () => console.log('Listening on port:', 8080))
