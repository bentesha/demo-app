const shortid = require('shortid')
const Customer = require('./models/Customer')

class Dao {

  constructor() {

  }

  async getCustomers() {
    return Customer.query();
  }

  async createCustomer(customer) {
    customer.id = shortid.generate()
    Customer.query().insert(customer)
    return customer
  }

  async getById(customerId) {
    return Customer.query().findById(customerId)
  }
}

module.exports = new Dao()