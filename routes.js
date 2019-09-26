const express = require('express')
const Joi = require('joi')
const dao = require('./dao')

const router = express.Router()

router.get('/', (request, response, next) => {
  response.send('Hello There!')
})

router.post('/customers/', ({ body }, response, next) => {
  (async () => {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string().allow(['', null])
    })

    const { error, value } = schema.validate(body)
    if (error) { return next(error) }
    const created = await dao.createCustomer(value)
    response.json(created)
  })().catch(next)
})

router.get('/customers', (request, response, next) => {
  (async () => {
    response.json(await dao.getCustomers())
  })().catch(next)
})

module.exports = router