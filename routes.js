const express = require('express')
const Joi = require('joi')
const shortid = require('shortid')

const customers = []

const router = express.Router()

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

router.get('/customers', (request, response, next) => {
  (async () => {
    response.json(customers)
  })().catch(next)
})

module.exports = router