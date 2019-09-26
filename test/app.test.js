const chai = require('chai')
const supertest = require('supertest')
const app = require('../app.js')

const expect = chai.expect

const knexfile = require('../knexfile')
const Knex = require('knex')
const { Model } = require('objection')

// Init database connection
const knex = Knex(knexfile.test)
Model.knex(knex)

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