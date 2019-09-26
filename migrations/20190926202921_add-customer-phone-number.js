
exports.up = function(knex) {
  return knex.schema.alterTable('customer', table => {
    table.string('phoneNumber')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('customer', table => {
    table.dropColumn('phoneNumber')
  })
};
