
exports.up = function(knex) {
  return knex.schema.createTable('customer', table => {
    table.string('id').primary()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customer')
};
