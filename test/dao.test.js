const chai = require('chai')
const dao = require('../dao')

const expect = chai.expect

describe('Dao', () => {
  describe('createCustomer', () => {
    it('it should create customer and assign id', () => {
      const customer = {
        firstName: 'Albert',
        lastName: 'Kilima'
      }

      const result = dao.createCustomer(customer)

      expect(result.id).to.be.string
      expect(result.firstName).to.equal(customer.firstName)
      expect(result.lastName).to.equal(customer.lastName)
    })
  })
})