
const knexfile = require('./knexfile')
const Knex = require('knex')
const { Model } = require('objection')
const app = require('./app')

// Init database connection
const knex = Knex(knexfile.development)
Model.knex(knex)

app.listen(8080, () => console.log('Listening on port:', 8080))
