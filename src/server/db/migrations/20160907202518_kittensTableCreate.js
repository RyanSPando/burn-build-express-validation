
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kittens', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('breed').notNullable().defaultTo('Ragamuffin');
    table.integer('age').notNullable().defaultTo(1);
    table.string('color').notNullable().defaultTo('black');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kittens');
};
