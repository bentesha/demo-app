const chai = require('chai')
const supertest = require('supertest')
const app = require('../app.js')

const expect = chai.expect

describe('Express API', () => {

  describe('POST /customers', () => {

    it('should create customer and assign id', async () => {
      const customer = {
        firstName: 'Sadru',
        lastName: 'Msumi'
      }

      const response = await supertest(app)
        .post('/customers')
        .send(customer)
        .expect(200)
      
      expect(response.body.id).to.be.ok
    })

  })

})