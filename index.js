const express = require('express')
const morgan = require('morgan')
const Joi = require('joi')
const shortid = require('shortid')

const app = express()
app.use(morgan('tiny'))
app.use(express.json())

const router = express.Router()
const customers = []


router.get('/', (request, response, next) => {
  response.send('Hello There!')
})

router.post('/customers/', ({ body }, response, next) => {
  (async () => {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    })

    const { error, value } = schema.validate(body)
    if (error) { return next(error) }
    value.id = shortid.generate()
    customers.push(value)
    response.json(value)
  })().catch(next)
})

app.use(router)
app.use((error, request, response, next) => {
  if (error.isJoi) {
    return response.send('Sorry, you have validation error!')
  }
  next(error)
})

app.listen(8080, () => console.log('Listening on port:', 8080))
