const shortid = require('shortid')

class Dao {

  constructor() {
    this.customers = []
  }

  getCustomers() {
    return this.customers
  }

  createCustomer(customer) {
    customer.id = shortid.generate()
    this.customers.push(customer)
    return customer
  }

  getById(customerId) {
    return this.customers.find(i => i.id === customerId)
  }
}

module.exports = new Dao()