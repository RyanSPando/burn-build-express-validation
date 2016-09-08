
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kittens').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('kittens').insert({age: 1, name: 'Fluffy', breed: 'Exotic Shorthair'}),
        knex('kittens').insert({age: 2, name: 'Tuffy', breed: 'Maine Coone'}),
        knex('kittens').insert({age: 3, name: 'Muffy', breed: 'Siamese'})
      ]);
    });
};
