const chai = require('chai')
const dao = require('../dao')

const knexfile = require('../knexfile')
const Knex = require('knex')
const { Model } = require('objection')

// Init database connection
const knex = Knex(knexfile.test)
Model.knex(knex)

const expect = chai.expect

describe('Dao', () => {
  describe('createCustomer', () => {
    it('it should create customer and assign id', async () => {
      const customer = {
        firstName: 'Albert',
        lastName: 'Kilima'
      }

      const result = await dao.createCustomer(customer)

      expect(result.id).to.be.string
      expect(result.firstName).to.equal(customer.firstName)
      expect(result.lastName).to.equal(customer.lastName)
    })
  })
})